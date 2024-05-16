const express = require("express")
const app = express()
const api = require('./routes/')
app.use('/api',api)
const PORT = 3080

app.listen(PORT)
