const Elements = require('./__generated__elements__')


const getAllElements = () => {
  return elements
}

const getElementBySlug = (slug) => {
  return Elements[slug]
  // return elements.filter(elem => elem.slug === slug).pop()
}

module.exports = {
  getAllElements,
  getElementBySlug,
}
