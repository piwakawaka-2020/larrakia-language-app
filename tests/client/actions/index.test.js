import { saveWords, receiveWords } from '../../../client/actions'

const testWords = [
  {
    id: 3,
    gulumirrginWord: 'Danijarra',
    englishWord: 'Long Bums',
    category: 'Animal',
    image_url: 'public/fake.jpg'
  },
  {
    id: 4,
    gulumirrginWord: 'Datlawa',
    englishWord: 'Frilled Neck Lizard',
    category: 'Animal',
    image_url: 'public/fake.jpg'
  }
]

test('saveWords action has type: SAVE_WORDS', () => {
  const expectedType = 'SAVE_WORDS'
  const expectedWords = testWords

  const actual = saveWords(testWords)

  expect(actual.type).toEqual(expectedType)
  expect(actual.words).toEqual(expectedWords)

})


test('receiveWords action has type: RECEIVE_WORDS', () => {
  const expectedType = 'RECEIVE_WORDS'
  const expectedWords = testWords

  const actual = receiveWords(testWords)

  expect(actual.type).toEqual(expectedType)
  expect(actual.words).toEqual(expectedWords)
})