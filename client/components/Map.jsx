import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';

export class Map extends React.Component {
  componentDidMount() {
    $('.modal-backdrop').remove()
    $('.modal-open').removeClass()
  }

  render() {
    return (
      <>
      <div id="mapContainer">
        <img id="mapImage" src='/images/LarrakiaCountry.png' alt='Larraki Country map image'/>
        <Link to='/game/draganddrop'>
          <div id="button-dragAndDropGame">
            <img className="button-image" src='/images/button1.png' alt='Dambilinggwa image'/>
          </div>
        </Link>
        <Link to='/game/memory'>
          <div id="button-memoryGame">
            <img className="button-image" src='/images/button2.png' alt='Dundil image' />
          </div>
        </Link>
        <Link to='/game/matching'>
          <div id="button-matchingGame">
            <img className="button-image" src='/images/redButton.png' alt='red button image' />
          </div>
        </Link>

        <div id="map-title">
          <h1>The</h1>
          <h1>Larrakia</h1>
          <h1>Language</h1> 
          <h1>App</h1>
          <h1 id='for-kids'>For Kids</h1>
        </div>
      </div>
      </>
    )
  }

}

export default Map