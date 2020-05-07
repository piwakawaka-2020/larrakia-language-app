import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

const MainSection = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/game">BEEP</Link>
          </Route>
          <Route path="/game">
            <Link to="/">BOOP</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default MainSection
