import React from 'react'
import { Link } from 'react-router-dom'

export class LandingMap extends React.Component {

    render() {
        return (
        <>
            <div id="landingMapContainer">
                <img id="landingMapImage" src='/images/map.png' alt='Northern Australia map image'/>
                <Link to="/map">
                    <div id="button-enterApp">
                        {/* Change button to pin or sign */}
                        <img className="button-image" src='/images/orangeButton.png' alt='Map pin image'/>
                    </div>
                </Link>
                <div id="welcomeBox">
                        {/* Change button to pin or sign */}
                        <img className="box-image" src='/images/Capture2.PNG' alt='welcome box image'/>
                    </div>
            </div>
        </>
        )
    }
}

export default LandingMap