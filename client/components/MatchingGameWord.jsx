import React from 'react'

const MatchingGameWord = props => {
  return (
    <>
    <div id={`w${props.id}`} className='matching-game-item' onClick={() => props.click(props.id)}>
      <p>{props.word}</p>
    </div>
    </>
  )
}

export default MatchingGameWord