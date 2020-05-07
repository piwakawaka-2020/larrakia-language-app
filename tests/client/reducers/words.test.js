import reducer from '../../../client/reducers'
import { SAVE_WORDS, RECEIVE_WORDS } from '../../../client/actions'

test('Should return the initial state if no type given', () => {
  const expected = {
    words: [
      {
        id: 0,
        gulumirrginWord: 'Banimadla',
        englishWord: 'Long-necked turle',
        category: 'Animal',
        image_url: 'public/fake.jpg'
      },
      {
        id: 1,
        gulumirrginWord: 'Damabila',
        englishWord: 'Barramundi',
        category: 'Animal',
        image_url: 'public/fake.jpg'
      },
      {
        id: 2,
        gulumirrginWord: 'Danggalaba',
        englishWord: 'Saltwater Crocodile',
        category: 'Animal',
        image_url: 'public/fake.jpg'
      },
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
      },
    ]
  }

  const actual = reducer(undefined, {})

  expect(actual).toEqual(expected)
})

test('Reducer should handle SAVE_WORDS', () => {

})
//SOMETHING IS GOING WRONG WITH THIS TEST
test('Reducer should handle RECEIVE_WORDS', () => {
  const expected = {
    words: [
      {
        id: 4,
        gulumirrginWord: 'Datlawa',
        englishWord: 'Frilled Neck Lizard',
        category: 'Animal',
        image_url: 'public/fake.jpg'
      }
    ]
  }

  const actual = reducer(RECEIVE_WORDS, expected)

  expect(actual).toEqual(expected)
})
