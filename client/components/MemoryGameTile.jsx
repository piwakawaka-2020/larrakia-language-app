import React from 'react'

const MemoryGameTile = props => {
  return (
    <div id={props.id} onClick={props.handleClick} className='memoryGameTile'>
      {props.isVisible ? <img className='memoryGameTileImage' src={props.image}/> : <img className='memoryGameTileImage' src="/images/button2.png"/>}
    </div>
  )
}

export default MemoryGameTile