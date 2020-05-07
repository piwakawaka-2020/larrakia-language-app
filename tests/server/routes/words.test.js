const request = require('supertest')

const server = require('../../../server/server')

jest.mock('../../../server/db/db', () => {
  return {
    getWords: () => {
      return Promise.resolve([
        {gulumirrgin_word: 'Banimadla', english_word: 'Long-necked Turtle', category: 'animals'},
        {gulumirrgin_word: 'Damabila', english_word: 'Barramundi', category: 'animals'}
      ])
    },
    getWordsByCategory: () => {
      return Promise.resolve([
        {gulumirrgin_word: 'Banimadla', english_word: 'Long-necked Turtle', category: 'animals'},
        {gulumirrgin_word: 'Damabila', english_word: 'Barramundi', category: 'animals'}
      ])
    },
    getWordById: () => {
      return Promise.resolve({gulumirrgin_word: 'Banimadla', english_word: 'Long-necked Turtle', category: 'animals'})
    }
  }
})


test('GET /api/v1/words returns and array of words', () => {
  const expected = 'Banimadla'

  return request(server).get('/api/v1/words')
    .then(res => {
      const actual = res.body[0].gulumirrgin_word

      expect(actual).toEqual(expected)
    })
})

test('GET /api/v1/words to not throw an error', () => {
  const expected = 500

  return request(server).get('/api/v1/words')
    .then(res => {
      const actual = res.status

      expect(actual).not.toBe(expected)
    })
})

test('GET /api/v1/words/:category returns and array of words', () => {
  const expected = 'Banimadla'

  return request(server).get('/api/v1/words/animals')
    .then(res => {
      const actual = res.body[0].gulumirrgin_word

      expect(actual).toEqual(expected)
    })
})

test('GET /api/v1/words:category to not throw an error', () => {
  const expected = 500

  return request(server).get('/api/v1/words/animals')
    .then(res => {
      const actual = res.status
      
      expect(actual).not.toBe(expected)
    })
})

test('GET /api/v1/words/id/:id returns and array of words', () => {
  const expected = 'Banimadla'

  return request(server).get('/api/v1/words/id/1')
    .then(res => {
      const actual = res.body.gulumirrgin_word

      expect(actual).toEqual(expected)
    })
})

test('GET /api/v1/words/id/:id to not throw an error', () => {
  const expected = 500

  return request(server).get('/api/v1/words/id/1')
    .then(res => {
      const actual = res.status
      
      expect(actual).not.toBe(expected)
    })
})