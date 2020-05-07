// Required imports
import React, { Component } from 'react'
import { connect } from 'react-redux'


//Children Components imports
import Image from './Image'
import Word from './Word'
import DropBox from './DropBox'

class DragAndDropGame extends Component {

    // Var that gives a random ID between 0 and 4
    getRandomId = () => {
        return Math.floor(Math.random() * (4 - 0 + 1) + 0)
    }

    render() {
        const { words } = this.props
        const idOne = this.getRandomId()
        let idTwo = this.getRandomId()
        if(idOne === idTwo) {
            idTwo = this.getRandomId()
        }

        const wordOne = words[idOne]
        const wordTwo = words[idTwo]

        return (
            <div className="container-fluid h-100">
                {/* Add a HowToPlay component modal(a popup window inside browser) with instructions on how to play game */}

                <div className="row">
                    <div className="mx-auto">
                        <Word key={wordOne.id} word={wordOne.gulumirrginWord} />
                    </div>
                </div>

                <div className="row align-items-center h-75">
                    <div className="col-md">
                        <Image key={wordOne.id} id={wordOne.id} image={wordOne.image_url} />
                    </div>

                    <div className="col-md my-auto">
                        <DropBox />
                    </div>

                    <div className="col-md">
                        <Image key={wordTwo.id} id={wordTwo.id} image={wordTwo.image_url} />
                    </div>
                </div>

                {/* Add a ProgressBar component to show how far into the game the user is */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        words: state.words
    }
}

export default connect(mapStateToProps)(DragAndDropGame)