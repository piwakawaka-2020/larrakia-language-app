import React from 'react'
import { connect } from 'react-redux'

import MemoryGameBoard from './MemoryGameBoard'
import startingTiles from '../startingTiles'
import WinScreen from './WinScreen'

const tryAgain = 'No match, try again'

class MemoryGame extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      matchCount: 0,
      isMatch: true,
      tiles: []
    }
    this.evalMatch = this.evalMatch.bind(this)
  }

  componentDidMount() {
    // calls function to chose tiles
    this.setGameTiles()
  }

  // eveluates if a pair matches
  evalMatch (tile1, tile2) {
    const {matchCount} = this.state
    const isMatch = tile1.word === tile2.word
    const updatedTiles = this.state.tiles.map(tile => {
      if (!isMatch && (tile === tile1 || tile === tile2)) {
        tile.isVisible = false
      }
      return tile
    })
    this.setState({
      matchCount: isMatch ? matchCount + 1 : matchCount,
      tiles: updatedTiles,
      isMatch: isMatch
    })
  }

  // gets game tiles and sets them to state
  setGameTiles() {
    // priorities words with audio and images
    let priorityWords = this.props.words.filter(word => word.audioUrl != null && word.imageUrl != null)
    // back up words with images for use if db dose not contain enough words with audio
    let secondaryWords = this.props.words.filter(word => word.audioUrl == null && word.imageUrl != null)
    // creates array to be populated
    let gameTiles = []
    let randomisedGameTiles = []
    // loop through priorities words array
    
    while (gameTiles.length < 16) {
      if(priorityWords.length > 0){
        // get random index
        let randomIndex = Math.floor(Math.random() * (priorityWords.length))
        // push to instances of word (one for each tile) to game tiles array
        gameTiles.push(priorityWords[randomIndex])
        gameTiles.push(priorityWords[randomIndex])
        // excludes word from future istances of the loop
        let id = priorityWords[randomIndex].id
        priorityWords = priorityWords.filter(word => word.id != id)
      } else {
        // get random index
        let randomIndex = Math.floor(Math.random() * (secondaryWords.length))
        // push to instances of word (one for each tile) to game tiles array
        gameTiles.push(secondaryWords[randomIndex])
        gameTiles.push(secondaryWords[randomIndex])
        // excludes word from future istances of the loop
        let id = secondaryWords[randomIndex].id
        secondaryWords = secondaryWords.filter(word => word.id != id)
      }
    }
    console.log(gameTiles)
    
    // randomise tile order
      while (randomisedGameTiles.length < 16) {
        // get random index
        let randomIndex = Math.floor(Math.random() * (gameTiles.length))
        // push to instances of word (one for each tile) to game tiles array
        randomisedGameTiles.push(gameTiles[randomIndex])
        // excludes word from future istances of the loop        
        gameTiles.splice(randomIndex, 1)
      }
    this.setState({tiles: randomisedGameTiles.map((tile, index) => tile = {
      id: index +1,
      image: tile.imageUrl,
      audio: tile.audioUrl,
      isVisible: false,
      word: tile.gulumirrginWord
    })});
  }


  render () {
    const hasWon = this.state.matchCount === 8
    return (
      hasWon ? <WinScreen /> :
      <div className='memoryGame'>
        <h1>Welcome to the Memory Game</h1>
        <h2>Match all the tiles to win</h2>

        <MemoryGameBoard tiles={this.state.tiles} evalMatch={this.evalMatch} />

        <h5>{!this.state.isMatch && tryAgain}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      words: state.words
  }
}

export default connect(mapStateToProps)(MemoryGame)

// {id: 1, image: '/images/Banimadla.jpg', audio: '/audio/Banimadla_vMemo.mp4', isVisible: false, word: 'Banimadla'}