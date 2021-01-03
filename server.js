const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 3000
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}
))
const api = require('./routes/api')
app.use(bodyParser.json())



app.use('/api', api)


app.listen(PORT, function () {
    console.log('Server running on : ' + PORT)
})