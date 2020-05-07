const express = require('express')

const { getWords, getWordsByCategory, getWordById } = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  getWords()
    .then(words => {
      res.send(words)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:category', (req, res) => {
  getWordsByCategory(req.params.category)
    .then(words => {
      res.send(words)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/id/:id', (req, res) => {
  getWordById(req.params.id)
    .then(word => {
      res.send(word)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})