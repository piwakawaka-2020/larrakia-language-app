// Required imports
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Children Components imports
import Image from './Image'
import Word from './Word'
import DropBox from './DropBox'


class DragAndDropGame extends Component {

    state = {
        wordOne: {},
        wordTwo: {},
        gameWin: 0,
    }

    componentDidMount() {
        const getRandomId = (max, min, except) => {
            let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
            return (randomNum === except) ? this.getRandomId(max, min, except) : randomNum
        }
        
        const idOne = getRandomId(4, 0, -1)
        const idTwo = getRandomId(4, 0, idOne)

        this.setState({
            wordOne: this.props.words[idOne],
            wordTwo: this.props.words[idTwo],
            gameWin: 0,
            isLoaded: true
        })
    }

    // Var that gives a random ID between 0 and the length of the database
    getRandomIndex = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1) - min)
    }

    changeRoundHandler = () => {
        const { words } = this.props
        const newIdOne = getRandomId(words.length, 0, -1)
        const newIdTwo = getRandomId(words.length, 0, newIdOne)
        this.setState({
            wordOne: words[newIdOne],
            wordTwo: words[newIdTwo],
            gameWin: this.state.gameWin + 1
        })
    }

    render() {
        const { wordOne, wordTwo } = this.state

        const currentWords = [wordOne, wordTwo]
        const randomIndex = this.getRandomIndex(1, 0)
        const displayedWord = currentWords[randomIndex].gulumirrgin_word

        return (
            <div className="container-fluid h-100">
            {this.state.wordOne === {} || this.state.wordTwo === {} ? <div>Loading</div> :
            
            
                // Add a HowToPlay component modal(a popup window inside browser) with instructions on how to play game
                <div className="container-fluid h-100">
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