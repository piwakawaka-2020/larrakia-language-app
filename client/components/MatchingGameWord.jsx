import React from 'react'

const MatchingGameWord = props => {
  return (
    <>
    <div id={`w${props.id}`} className='matching-game-item' onClick={() => props.click(props.id)}>
      <h4>{props.word}</h4>
    </div>
    </>
  )
}

export default MatchingGameWord