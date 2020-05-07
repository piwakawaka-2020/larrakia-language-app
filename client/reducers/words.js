import { SAVE_WORDS, RECEIVE_WORDS } from '../actions'

const initialState = []

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
