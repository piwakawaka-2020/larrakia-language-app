const path = require('path')
const express = require('express')

const server = express()

const wordsRouts = require('./routes/words')

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/words', wordsRouts)

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

module.exports = server
