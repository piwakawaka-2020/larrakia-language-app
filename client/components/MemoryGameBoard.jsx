import React from 'react'

import MemoryGameTile from './MemoryGameTile'

class MemoryGameBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tile1: null,
      tile2: null
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
    const isMatch = tile1.value === tile2.value

    const processSelectedTiles = () => {
      this.setState({
        tile1: null,
        tile2: null
      })
      this.props.evalMatch(tile1, tile2)
    }

    if (isMatch) {
      processSelectedTiles()
    } else {
      setTimeout(processSelectedTiles, 1000)
    }
  }

  render () {
    return <div className='memoryGameTiles'>
      {this.props.tiles.map(tile => {
        return <MemoryGameTile
          key={tile.id}
          info={tile.info}
          value={tile.value}
          isVisible={tile.isVisible} 
          handleClick={() => this.handleClick(tile.id)}
          />
      })}
    </div>
  }
}

export default MemoryGameBoard