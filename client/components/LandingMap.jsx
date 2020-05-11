import React from 'react'
import { Link } from 'react-router-dom'

export class LandingMap extends React.Component {

    render() {
        return (
        <>
            <div id="landingMapContainer">
                <img id="landingMapImage" src='/images/map.png' />
                <Link to="/map">
                    <div id="button-enterApp">
                        {/* Change button to pin or sign */}
                        <img className="button-image" src='/images/button1.png' />
                    </div>
                </Link>
            </div>
        </>
        )
    }
}

export default LandingMap