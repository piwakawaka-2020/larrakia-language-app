import React from 'react'
import { Link } from 'react-router-dom';

export class Map extends React.Component {


  render() {
    return (
      <>
      <div id="mapContainer">
        <img id="mapImage" src='/images/map.png' />
        <Link to='/game'>
          <div id="button-dragAndDropGame">
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