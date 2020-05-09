import React from 'react'

const MemoryGameTile = props => {
  return (
    <div id={props.id} onClick={props.handleClick} className='memoryGameTile'>
      {props.isVisible ? props.value : <img className='memoryGameTileImage' src="/images/fake.png"/>}
    </div>
  )
}

export default MemoryGameTile