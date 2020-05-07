const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

// gets all the words from the words table in the database
export function getWords (db = connection) {
  return db('words').select()
}

// gets all words that match the category provided from the words table in the database 
export function getWordsByCategory (category, db = connection) {
  return db('words').where('category', category).select()
}

// gets a single word based on id provided from the words table 
export function getWordById (id, db = connection) {
  return db('words').where('id', id).first()
}