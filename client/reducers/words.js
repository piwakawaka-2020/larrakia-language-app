import { SAVE_WORDS, RECEIVE_WORDS } from '../actions'

const initialState = [
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_WORDS:
      return [...state, action.words]
    case RECEIVE_WORDS:
      return action.words
    default:
      return state
  }
}

export default reducer
