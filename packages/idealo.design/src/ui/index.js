import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import StyleContext from 'isomorphic-style-loader/StyleContext'

import { BrowserRouter as Router } from 'react-router-dom'

const insertCss = (...styles) => {
  const removeCss = styles.map(style => {
    if (!style._insertCss) return
    return style._insertCss()
  })
  return () => removeCss.forEach(dispose => dispose())
}

const renderMethod = process.env.NODE_ENV === 'development'
      ? ReactDOM.render
      : ReactDOM.hydrate

renderMethod(
  <StyleContext.Provider value={{ insertCss }}>
    <Router>
      <App />
    </Router>
  </StyleContext.Provider>,
  document.getElementById('root')
)
