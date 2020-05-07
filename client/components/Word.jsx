import React, { Component } from 'react'

class Word extends React.Component {
    render() {
        const { word } = this.props
        return (
            <h1>{word}</h1>
        )
    }
}

export default Word