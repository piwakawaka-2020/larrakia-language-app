import React from 'react'

const MatchingGameImage = props => {
  return (
    <>
    <div id={`i${props.id}`} className={`matching-game-item i${props.id}`} onClick={() => props.click(props.id)}>
      <img src={props.image}/>
    </div>
    </>
  )
}

export default MatchingGameImage