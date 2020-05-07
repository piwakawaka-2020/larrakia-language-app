// Required imports
import React, { Component } from 'react'
import { connect } from 'react-redux'


//Children Components imports
import Image from './Image'
import Word from './Word'
import DropBox from './DropBox'


const getRandomId = (max, min, except) => {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    return (randomNum === except) ? this.getRandomId(max, min, except) : randomNum
}

const idOne = getRandomId(4, 0, -1)
const idTwo = getRandomId(4, 0, idOne)

class DragAndDropGame extends Component {

    state = {
        wordOne: this.props.words[idOne],
        wordTwo: this.props.words[idTwo],
        gameWin: 0
    }

    // Var that gives a random ID between 0 and 4
    getRandomIndex = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) - min)
    }

    changeRoundHandler = () => {
        const newIdOne = getRandomId(4, 0, -1)
        const newIdTwo = getRandomId(4, 0, idOne)
        this.setState({
            wordOne: this.props.words[newIdOne],
            wordTwo: this.props.words[newIdTwo],
            gameWin: this.state.gameWin + 1
        })
    }

    render() {
        const { wordOne, wordTwo } = this.state

        const currentWords = [wordOne, wordTwo]
        const randomIndex = this.getRandomIndex(1, 0)
        const displayedWord = currentWords[randomIndex].gulumirrginWord
        console.log(this.state)
        return (
            <div className="container-fluid h-100">
                {/* Add a HowToPlay component modal(a popup window inside browser) with instructions on how to play game */}

                <div className="row">
                    <div className="mx-auto">
                        <Word key={wordOne.id} word={displayedWord} />
                    </div>
                </div>

                <div className="row align-items-center h-75">
                    <div className="col-md">
                        <Image key={wordOne.id} id={wordOne.id} image={wordOne.image_url} word={wordOne.gulumirrginWord} displayedWord={displayedWord} changeRoundHandler={this.changeRoundHandler}/>
                    </div>

                    <div className="col-md my-auto">
                        <DropBox />
                    </div>

                    <div className="col-md">
                        <Image key={wordTwo.id} id={wordTwo.id} image={wordTwo.image_url} word={wordTwo.gulumirrginWord} displayedWord={displayedWord} changeRoundHandler={this.changeRoundHandler}/>
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