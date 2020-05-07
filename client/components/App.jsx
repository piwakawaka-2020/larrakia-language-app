import React from 'react'
import { connect } from 'react-redux'
import DragAndDropGame from './DragAndDropGame'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const App = () => {
  return (
    <div className="app">
      Hello World
      <DndProvider backend={Backend}>
        <DragAndDropGame />
      </DndProvider>
    </div>
  )
}

export default connect()(App)
