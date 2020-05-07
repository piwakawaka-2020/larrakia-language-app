const knex = require('knex')
const config = require('../../../knexfile')
const env = 'test'
const database = knex(config[env])

const { getWords, getWordsByCategory, getWordById } = require('../../../server/db/db')

// creates a test database form actually migrations located in db folder and controlled 
// testing seed data located in test folder

beforeAll(() => {
  return database.migrate.latest()
  .then(() => {
    return database.seed.run()
  })
})

test('db function getWords, returns an array of words with the correct lenght', () => {
  // Prepare
  const expected = 7

  // Act
  return getWords(database)
  .then(words => {
    const actual = words.length

    // Assert
    expect(actual).toEqual(expected)
  })
})

test('db function getWordsByCategory, returns an array of words with the correct lenght', () => {
  // Prepare
  const expected = 5

  // Act
  return getWordsByCategory('animals', database)
  .then(words => {
    const actual = words.length

    // Assert
    expect(actual).toEqual(expected)
  })
})

test('db function getWordById, returns the correct word', () => {
  // Prepare
  const expected = 'Banimadla'

  // Act
  return getWordById(1, database)
  .then(words => {
    const actual = words.gulumirrgin_word

    // Assert
    expect(actual).toBe(expected)
  })
})