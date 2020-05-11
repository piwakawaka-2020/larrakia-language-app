import React from 'react'

import MemoryGameTile from './MemoryGameTile'

class MemoryGameBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tile1: null,
      tile2: null,
      lastSoundPlayed: (new Date()).getTime()
    }
    this.processPair = this.processPair.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    
    if (this.state.tile1 && this.state.tile2) return
    const {tile1} = this.state
    const tile = this.props.tiles.find(tile => tile.id === id)
    tile.isVisible = true

    // if the first tile is being flipped
    if (tile1 === null) {
      this.setState({
        tile1: tile
      })
      return
    }

    // if the second tile is being flipped
    this.setState({
      tile2: tile
    }, this.processPair)
  }

  processPair () {
    const {tile1, tile2} = this.state
    const isMatch = tile1.word === tile2.word

    const processSelectedTiles = () => {
      this.setState({
        tile1: null,
        tile2: null
      })
      this.props.evalMatch(tile1, tile2)
    }

    if (isMatch) {
      tile2.audio != null && this.canPlaySound && this.playSound(tile2)
      processSelectedTiles()
    } else {
      setTimeout(processSelectedTiles, 1000)
    }
  }

  canPlaySound() {
    const currentTime = (new Date()).getTime()
    const threshold = 5000
    return currentTime > (this.state.lastSoundPlayed + threshold)
  }

  playSound (tile) {
    const tileSound = new Audio()
    // create sound object
    tileSound.src = tile.audio
    // call sound object
    tileSound.play()
    // change state to time of laste played sound
    this.setState({
      lastSoundPlayed: (new Date()).getTime()
    })
  }

  render () {
    return <div className='memoryGameTiles'>
      {this.props.tiles.map((tile, index) => {
        return <MemoryGameTile
          key={tile.id}
          word={tile.word}
          image={tile.image}
          audio={tile.audio}
          isVisible={tile.isVisible} 
          handleClick={() => this.handleClick(tile.id)}
          />
      })}
    </div>
  }
}

export default MemoryGameBoard