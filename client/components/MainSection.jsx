//Required imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

//Child component imports
import DragAndDropGame from './DragAndDropGame'
import Map from './Map'
import LandingMap from './LandingMap'
import BurgerMenu from './BurgerMenu'
import MemoryGame from './MemoryGame'
<<<<<<< HEAD
import LarrakiaPeople from './LarrakiaPeoplePage'
||||||| merged common ancestors
=======
import About from './About'
>>>>>>> d7f8978792037ca148d530265b2c17de109e07db

const MainSection = props => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingMap />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/map">
            <BurgerMenu />
            <Map />
          </Route>
          <Route path= "/LarrakiaPeople">
          <LarrakiaPeople />
          </Route>
          <Route path="/game/draganddrop">
            {props.words.length > 0 ? 
              <DndProvider backend={Backend}>
                <DragAndDropGame />
              </DndProvider> : 
            <div>Loading...</div> }
          </Route>
          <Route path="/game/memory">
            {props.words.length > 0 ? 
            <MemoryGame />: 
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
