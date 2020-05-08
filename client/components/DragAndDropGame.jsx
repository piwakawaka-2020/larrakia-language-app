// Required imports
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Children Components imports
import Image from './Image'
import Word from './Word'
import DropBox from './DropBox'

import ProgressBar from './ProgressBar'
import WinScreen from './WinScreen'

class DragAndDropGame extends Component {

    state = {
        wordOne: {},
        wordTwo: {},
        gameWin: 0,
        scoreToWin: 10
    }

    componentDidMount() {
        // Function returns a random ID number
        const getRandomId = (max, min, except) => {
            let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
            return (randomNum === except) ? this.getRandomId(max, min, except) : randomNum
        }
        
        //Var contains 2 random IDs for use in game
        const idOne = getRandomId(this.props.words.length - 1, 0, -1)
        const idTwo = getRandomId(this.props.words.length - 1, 0, idOne)

        //Set state on game load to have random word objects
        this.setState({
            wordOne: this.props.words[idOne],
            wordTwo: this.props.words[idTwo],
            gameWin: 0
        })
    }

    getRandomId = (max, min, except) => {
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
        return (randomNum === except) ? this.getRandomId(max, min, except) : randomNum
    }

    // Var that gives a random ID between 0 and the length of the database
    getRandomIndex = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) - min)
    }

    changeRoundHandler = () => {
        const { words } = this.props
        const newIdOne = this.getRandomId(words.length - 1, 0, -1)
        const newIdTwo = this.getRandomId(words.length - 1, 0, newIdOne)
        this.setState({
            wordOne: words[newIdOne],
            wordTwo: words[newIdTwo],
            gameWin: this.state.gameWin + 1
        })
    }

    render() {
        const { wordOne, wordTwo } = this.state

        //Randomly selects word to learn from random words selected
        const currentWords = [wordOne, wordTwo]
        const randomIndex = this.getRandomIndex(1, 0)
        const displayedWord = currentWords[randomIndex].gulumirrginWord

        return (
            <div>
                {this.state.gameWin < 10 ? 
                    <div className="container-fluid h-100">
                    <div className="row">
                        <div className="mx-auto">
                            <Word key={wordOne.id} word={displayedWord} />
                        </div>
                    </div>

                    <div className="row align-items-center h-75">
                        <div className="col-md">
                            <Image key={wordOne.id} id={wordOne.id} image={wordOne.imageUrl} word={wordOne.gulumirrginWord} displayedWord={displayedWord} changeRoundHandler={this.changeRoundHandler}/>
                        </div>

                        <div className="col-md my-auto">
                            <DropBox />
                        </div>

                        <div className="col-md">
                            <Image key={wordTwo.id} id={wordTwo.id} image={wordTwo.imageUrl} word={wordTwo.gulumirrginWord} displayedWord={displayedWord} changeRoundHandler={this.changeRoundHandler}/>
                        </div>
                    </div>

                    <ProgressBar currentScore={this.state.gameWin} scoreToWin={this.state.scoreToWin}/>
                {/* Add a ProgressBar component to show how far into the game the user is */}
                </div> :
                <div>
                    <WinScreen />
                </div>
            }
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