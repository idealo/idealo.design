const express = require('express')
const app = express()

app.use(express.static('out'))

console.log('Serving on localhost:8080')
app.listen(8080)
