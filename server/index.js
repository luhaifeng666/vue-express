const express = require('express')
const app = express()
const port = 3000

const cakeList = require('./api/cakeList')

app.use('/api/cake', cakeList)

app.listen(port)
console.log(`server listening at ${port}`)