//Required imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

//Child component imports
import DragAndDropGame from './DragAndDropGame'

const MainSection = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            INSERT MAP COMPONENT HERE
          </Route>
          <Route path="/game">
            <DndProvider backend={Backend}>
              <DragAndDropGame />
            </DndProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default MainSection
