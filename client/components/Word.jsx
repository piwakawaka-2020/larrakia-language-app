import React, { Component } from 'react'

class Word extends React.Component {
    render() {
        const { word } = this.props
        return (
            <p>{word}</p>
        )
    }
}

export default Word