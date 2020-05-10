// Required imports
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Children Components imports
import Image from './Image'
import Word from './Word'
import DropBox from './DropBox'

import ProgressBar from './ProgressBar'
import WinScreen from './WinScreen'
import SuccessTick from './SuccessTick'
import FailureIndicator from './FailureIndicator'

class DragAndDropGame extends Component {

    state = {
        displayedWord: '',
        wordOne: {},
        wordTwo: {},
        gameWin: 0,
        scoreToWin: 10,
        changeRound: false,
        isIncorrect: false
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

        //Randomly selects word to learn from random words selected
        const currentWords = [this.props.words[idOne], this.props.words[idTwo]]
        const randomIndex = this.getRandomIndex(1, 0)
        console.log(currentWords[randomIndex].gulumirrginWord)

        //Set state on game load to have random word objects
        this.setState({
            wordOne: this.props.words[idOne],
            wordTwo: this.props.words[idTwo],
            displayedWord: currentWords[randomIndex].gulumirrginWord
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

    checkmarkHandler = () => {
        this.setState({
            changeRound: true
        })
    }

    failMessageHandler = () => {
        this.setState({
            isIncorrect: true
        })
    }
    
    changeRoundHandler = () => {
        const { words } = this.props
        const newIdOne = this.getRandomId(words.length - 1, 0, -1)
        const newIdTwo = this.getRandomId(words.length - 1, 0, newIdOne)
        const newWords = [words[newIdOne], words[newIdTwo]]
        const randomIndex = this.getRandomIndex(1, 0)

        this.setState({
            displayedWord: newWords[randomIndex].gulumirrginWord,
            wordOne: words[newIdOne],
            wordTwo: words[newIdTwo],
            gameWin: this.state.gameWin + 1,
            changeRound: false,
            isIncorrect: false
        })
    }

    render() {
        const { wordOne, wordTwo } = this.state
        console.log(this.state.displayedWord)
        return (
            <div>
                {this.state.gameWin < 10 ? 
                    <div className="container-fluid h-100">
                    <div className="row">
                        <div className="mx-auto">
                            <Word key={wordOne.id} word={this.state.displayedWord} />
                        </div>
                    </div>

                    <div className="row align-items-center h-75">
                        <div className="col-md">
                            <Image key={wordOne.id} id={wordOne.id} image={wordOne.imageUrl} word={wordOne.gulumirrginWord} displayedWord={this.state.displayedWord} changeRoundHandler={this.changeRoundHandler} checkmarkHandler={this.checkmarkHandler} failMessageHandler={this.failMessageHandler}/>
                        </div>

                        <div className="col-md my-auto">
                            {this.state.changeRound ? <SuccessTick /> : this.state.isIncorrect ? <FailureIndicator /> : ''}
                            <DropBox />
                        </div>

                        <div className="col-md">
                            <Image key={wordTwo.id} id={wordTwo.id} image={wordTwo.imageUrl} word={wordTwo.gulumirrginWord} displayedWord={this.state.displayedWord} changeRoundHandler={this.changeRoundHandler} checkmarkHandler={this.checkmarkHandler} failMessageHandler={this.failMessageHandler}/>
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