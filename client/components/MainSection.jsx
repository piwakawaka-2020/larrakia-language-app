import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const MainSection = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            INSERT MAP COMPONENT HERE
          </Route>
          <Route path="/game">
            INSERT GAME COMPONENT HERE
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default MainSection
