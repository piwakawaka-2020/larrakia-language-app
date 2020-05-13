import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeButton extends Component {
    render() {
        return (
            <div>
                <Link to="/map">
                    <img className="home-button" src="/images/house.png" alt="Home Button"/>
                </Link>
            </div>
        )
    }
}

export default HomeButton