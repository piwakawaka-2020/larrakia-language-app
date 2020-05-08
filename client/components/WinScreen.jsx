import React, { Component } from 'react'

class WinScreen extends Component {
    render() {
        return (
            <div className="container container-full center-align">
                <div className="row">
                    <div className="mx-auto">
                        <h1>Well Done!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="mx-auto">
                        <button>Press here to go back to Larrakia</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WinScreen