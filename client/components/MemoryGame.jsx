import React from 'react'

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
      tiles: startingTiles
    }
    this.evalMatch = this.evalMatch.bind(this)
  }


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

  render () {
    const hasWon = this.state.matchCount === (startingTiles.length / 2)
    return (
      hasWon ? <WinScreen /> :
      <div className='memoryGame'>
        <h1>Welcome to the Memory Game</h1>
        <h2>Match all the tiles to win</h2>

        <MemoryGameBoard tiles={startingTiles} evalMatch={this.evalMatch} />

        <h5>{!this.state.isMatch && tryAgain}</h5>
      </div>
    )
  }
}


export default MemoryGame
