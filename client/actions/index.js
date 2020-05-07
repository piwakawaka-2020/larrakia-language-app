export const SAVE_WORDS = 'SAVE_WORDS'
export const RECEIVE_WORDS = 'RECEIVE_WORDS'

// This action adds the words to the list of words already in state
const saveWords = words => {
  return {
    type: SAVE_WORDS,
    words
  }
}

//This action replaces the list of words in state with a new list
const receiveWords = words => {
  return {
    type: RECEIVE_WORDS,
    words
  }
}

export const fetchWords = () => {
  // return dispatch => {
  //   APICALL()
  //     .then(words => {
  //       dispatch(receiveWords(words))
  //     })
  // }
}

export const fetchWordById = () => {
  // return dispatch => {
  //   APICALL()
  //     .then(words => {
  //       dispatch(saveWords(words))
  //     })
  // }
}

export const fetchWordsByCategory = () => {
  // return dispatch => {
  //   APICALL()
  //     .then(words => {
  //       dispatch(saveWords(words))
  //     })
  // }
}
