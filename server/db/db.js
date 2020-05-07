const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)


export function getWords (db = connection) {
  return db('words').select()
}