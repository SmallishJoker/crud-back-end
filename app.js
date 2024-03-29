const express = require('express')
const router = require('./router')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(3001, () => {
	console.log('http://localhost:3001')
})