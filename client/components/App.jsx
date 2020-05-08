import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import { fetchWords } from '../actions'

import DragAndDropGame from './DragAndDropGame'


class App extends Component {

  state = {
    isLoaded: false
  }

  componentDidMount() {
    this.props.dispatch(fetchWords())
    this.setState({
      isLoaded: true
    })
  }

  render() {
    return (
      <div>
        {this.props.words.length > 0 ? 
          <div>
            <div className="app">
              Hello World
              <DndProvider backend={Backend}>
                <DragAndDropGame />
              </DndProvider>
            </div>
          </div> : 
          <div>Loading...</div> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(App)
