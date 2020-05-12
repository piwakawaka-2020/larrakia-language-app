import React from 'react'
import { Link } from 'react-router-dom'

export class LandingMap extends React.Component {

    render() {
        return (
        <>
            <div id="landingMapContainer">
                <div id="landing-title">
                  <h1 className='llaLanding'>Larrakia Language App </h1>
                  <h1 className='for-kidslanding'>&nbsp;For Kids</h1>
                </div>
                <img id="landingMapImage" src='/images/map.png' alt='Northern Australia map image'/>
                <Link to="/map">
                    <div id="button-enterApp">
                        {/* Change button to pin or sign */}
                        <img className="button-image" src='/images/pin.png' alt='Map pin image'/>
                    </div>
                </Link>
                <div id="welcomeBox">
                        {/* Change button to pin or sign */}
                        <img className="box-image" src='/images/yellowSign.png' alt='welcome box image'/>
                    </div>
            </div>
        </>
        )
    }
}

export default LandingMap