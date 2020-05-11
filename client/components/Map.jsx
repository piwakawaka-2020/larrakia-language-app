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
        <img id="mapImage" src='/images/LarrakiaCountry.png' />
        <Link to='/game/draganddrop'>
          <div id="button-dragAndDropGame">
            <img className="button-image" src='/images/button1.png' />
          </div>
        </Link>
        <Link to='/game/memory'>
          <div id="button-memoryGame">
            <img className="button-image" src='/images/button2.png' />
          </div>
        </Link>
      </div>
      </>
    )
  }

}

export default Map