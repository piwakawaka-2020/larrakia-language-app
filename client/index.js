import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(
//   applyMiddleware(thunk)
// ))

document.addEventListener('DOMContentLoaded', () => {
  render(
    // Commented out code is for use of redux
    // <Provider store={store}>
    //   <App />
    // </Provider>,
    <App />,
    document.getElementById('app')
  )
})
