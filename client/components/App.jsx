import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { fetchWords } from '../actions'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWords())
  }

  render() {
    return (
      <div className="app">
        Hello World
      </div>
    )
  }
}

export default connect()(App)
