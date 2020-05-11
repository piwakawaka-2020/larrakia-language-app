import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import BurgerMenu from './BurgerMenu'


class LarrakiaPeople extends React.Component {

  render() {
    return (
      <nav>
          <body className="larrakiaPeople">
        <div>
          <Router>
          <BurgerMenu />
          </Router>  
          <br></br>
          <h1>Larrakia People are Saltwater People</h1>
          <br></br>
          <p>We have a strong relationship with the ocean and all the animals who we share the waters with.</p>
          <p>We also have strong relationships with the people who live around us, like the Tiwi people, The Wogait people and the Wulna People.</p>
          <p>Larrakia people have lots of ceremonies and songs we share with our neighbours to make sure we stay connected and to maintain peace.</p>
          <p>The Crocodile is a very important animal for us, it is the shared totem of all Larrakia people meaning it represents us and we treate Danggalaba with greate respect.</p>
          <br></br>
          <p>We have lived on our lands since the beginning of time and have always cared for all the animals, plants and people.</p>
          <p>When you are on Larrakia country it's important that you respect all the animals and the land too.</p>
          <br></br>
          <p>Remember, when we look after the land, the land will look after us.</p>
          <br></br>
          <p></p>
        </div>
          </body>
      </nav>
    )
  }
}

export default LarrakiaPeople
