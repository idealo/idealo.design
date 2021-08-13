const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({
  html: true,
  breaks: true,
  typographer: true,
})

md.enable(['image'])

function convertStyleFromHtmlToMd(input) {
  let output = input

  output = output.replace(/\<i\>(.+)\<\/i\>/gi, '_$1_') // italic
  output = output.replace(/\<b\>(.+)\<\/b\>/gi, '_$1_') // bold
  output = output.replace(/\<u\>(.+)\<\/u\>/gi, '_$1_') // underline
  output = output.replace(/\<s\>(.+)\<\/s\>/gi, '_$1_') // strikethrough

  return output
}

function convertStyleFromMdToHtml(input) {
  let output = input

  output = output.replace(/\_(.+)\_/gi, '<i>$1</i>') // italic
  output = output.replace(/\_(.+)\_/gi, '<b>$1</b>') // bold
  output = output.replace(/\_(.+)\_/gi, '<u>$1</u>') // underline
  output = output.replace(/\_(.+)\_/gi, '<s>$1</s>') // strikethrough

  return output
}

function mdToJson(input) {
  if (typeof input !== 'string') {
    throw 'Parameter `input` is expected to be of type `string`'
  }

  let ast = md.parse(input)

  const elements = []

  ast.map((token, idx, tokens) => {
    let section = {}

    switch (token.type) {

    case 'fence':
      section.type = 'code',
      section.lang = String(token.info).trim()
      break
    case 'inline':
      // image
      if (token.content[0] === '!') {
        section.type = 'img'
        const re = /^\!\[(?<alt>.+)\]\((?<path>.+) \"(?<title>.+)\"\)$/
          const { alt, path, title } = token.content.match(re).groups

        section.alt = alt
        section.path = path
        section.title = title
      } else {
        const prev = tokens[idx-1]
        section.type = prev.tag
      }
    }

    section.content = convertStyleFromMdToHtml(token.content)

    section.content = section.content.split('\n').join(' ')
    section.content = section.content.replace(/\_(.+)\_/g, '<i>$1</i>')

    if (section.content) {
      elements.push(section)
    }
  })


  return {
    elements,
  }
}

function jsonToMd(input) {
  let json = input
  let md = ''

  if (typeof json === 'string') {
    json = JSON.parse(input)
  }

  json.elements.map((item, idx, elems) => {
    const content = convertStyleFromHtmlToMd(item.content)

    switch (item.type) {
    case 'h1':
      md += '\n' + '# ' + content
      break
    case 'h2':
      md += '\n' + '## ' + content
      break
    case 'h3':
      md += '\n' + '### ' + content
      break
    case 'h4':
      md += '\n' + '#### ' + content
      break
    case 'h5':
      md += '\n' + '##### ' + content
      break
    case 'p':
      md += '\n' + content + '\n'
      break
    }
  })

  return String(md).trim()
}

module.exports = {
  mdToJson,
  jsonToMd,
}
