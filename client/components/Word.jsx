import React, { Component } from 'react'

class Word extends React.Component {
    render() {
        const { word } = this.props
        return (
            <h1 className= "neuchaFont"><strong>{word}</strong></h1>
        )
    }
}

export default Word