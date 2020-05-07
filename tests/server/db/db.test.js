const knex = require('knex')
const config = require('../../../knexfile')
const env = 'test'
const database = knex(config[env])

const { getWords } = require('../../../server/db/db')

// creates a test database form actually migrations located in db folder and controlled 
// testing seed data located in test folder

beforeAll(() => {
  return database.migrate.latest()
  .then(() => {
    return database.seed.run()
  })
})

test('I can get sample words', () => {
  // Prepare
  const expected = 5

  // Act
  return getWords(database)
  .then(words => {
    const actual = words.length

    // Assert
    expect(actual).toEqual(expected)
  })
})