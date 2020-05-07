const path = require('path')
const express = require('express')

const server = express()

const wordsRouts = require('./routes/words')

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/words', wordsRouts)

module.exports = server
