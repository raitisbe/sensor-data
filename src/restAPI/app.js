// ./app.js
const express = require('express')
const mountRoutes = require('./routes')
const app = express()
mountRoutes(app)
app.listen(8099, () => console.log('Listening on port 8099!'))