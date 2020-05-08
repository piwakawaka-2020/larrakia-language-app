//Require import
import React, { Component } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


const WinScreen = () => {
    const { width, height } = useWindowSize()
    return (
        <div className="container container-full center-align">
            <Confetti width={width} height={height}/>
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

export default WinScreen
