import express from 'express'

import Renderer from './renderer'

const PORT = process.env.HTTP_PORT || 8080
const app = express()


app.get('/*', (req, res) => {
  return Renderer(req, res)
})

app.listen(PORT, () => {
  console.log(` -> 0.0.0.0:${PORT}`)
})
