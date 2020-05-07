import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { fetchWords } from '../actions'
import MainSection from './MainSection'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWords())
  }

  render() {
    return (
      <div className="app">
        <MainSection />
      </div>
    )
  }
}

export default connect()(App)
