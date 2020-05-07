import { getWords, getWordById, getWordsByCategory } from '../api'

export const SAVE_WORDS = 'SAVE_WORDS'
export const RECEIVE_WORDS = 'RECEIVE_WORDS'

// This action adds the words to the list of words already in state
export const saveWords = words => {
  return {
    type: SAVE_WORDS,
    words
  }
}

// This action replaces the list of words in state with a new list
export const receiveWords = words => {
  return {
    type: RECEIVE_WORDS,
    words
  }
}

// Gets all words from the database and replaces all words in state
export const fetchWords = () => {
  return dispatch => {
    getWords()
      .then(words => {
        dispatch(receiveWords(words))
      })
  }
}

// Gets a single word from the database and adds it to the list of words in state
export const fetchWordById = () => {
  return dispatch => {
    getWordById()
      .then(words => {
        dispatch(saveWords(words))
      })
  }
}

// Gets a list of words from the database and adds them to the list of words in state
export const fetchWordsByCategory = () => {
  return dispatch => {
    getWordsByCategory()
      .then(words => {
        dispatch(saveWords(words))
      })
  }
}
