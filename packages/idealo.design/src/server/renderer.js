import path from 'path'
import fs from 'fs'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext'

import App from '../ui/App'

export default function renderer(req, res) {

  console.log('req.user: ', req.user)

  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => {
    if (style && style._getCss) {
      css.add(style._getCss())
    }
  })

  const context = {}
  const app = ReactDOMServer.renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Router location={req.url} context={context}>
        <App />
      </Router>
    </StyleContext.Provider>
  )

  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      console.log('Error: ', err)
      return res.status(500).send('We\'re sorry -_-')
    }

    let html = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    let htmlWithStyles = html
        .replace(
          '<style data-id="head"></style>',
          `<style>${[...css].join('')}</style>`
        )

    return res.send(htmlWithStyles)
  })
}
