import React from 'react'
import { connect } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const App = () => {
  return (
    <div className="app">
      Hello World
    </div>
  )
}

export default connect()(App)
