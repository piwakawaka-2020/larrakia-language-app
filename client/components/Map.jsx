import React from 'react'
import { Link } from 'react-router-dom';

export class Map extends React.Component {


  render() {
    return (
      <>
      <div id="mapContainer">
        <img id="mapImage" src='/images/map.png' />
        <Link to='/game/draganddrop'>
          <div id="button-dragAndDropGame">
            {/* <img src='#' /> */}
            <p>i am a button</p>
          </div>
        </Link>
        <Link to='/game/memory'>
          <div id="button-memoryGame">
            {/* <img src='#' /> */}
            <p>i am a button</p>
          </div>
        </Link>
      </div>
      </>
    )
  }

}

export default Map