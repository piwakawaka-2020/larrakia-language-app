//Required imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

//Child component imports
import DragAndDropGame from './DragAndDropGame'
import Map from './Map'

const MainSection = props => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Map />
          </Route>
          <Route path="/game/draganddrop">
            {props.words.length > 0 ? 
              <DndProvider backend={Backend}>
                <DragAndDropGame />
              </DndProvider> : 
            <div>Loading...</div> }
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(MainSection)
