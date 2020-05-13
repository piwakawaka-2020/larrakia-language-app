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
import Dictionary from './Dictionary'
import MemoryGame from './MemoryGame'
import LarrakiaPeople from './LarrakiaPeoplePage'
import About from './About'
import MatchingGame from './MatchingGame'
import Loading from './Loading'

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
          <Route path="/dictionary">
            <Dictionary />
          </Route>
          <Route path= "/LarrakiaPeople">
            <LarrakiaPeople />
          </Route>
          <Route path="/game/draganddrop">
            {props.words.length > 0 ? 
              <DndProvider backend={Backend}>
                <DragAndDropGame />
              </DndProvider> : 
            <Loading /> }
          </Route>
          <Route path="/game/memory">
            {props.words.length > 0 ? 
            <MemoryGame />: 
            <Loading /> }
          </Route>
          <Route path="/game/matching">
            {props.words.length > 0 ? 
            <MatchingGame />: 
            <Loading /> }
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
