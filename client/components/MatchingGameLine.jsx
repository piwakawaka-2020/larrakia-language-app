import React from 'react'

const MatchingGameLine = props => {
  return (
    <>
      <line x1={props.x1} y1={props.y1} x2={props.x2} y2={props.y2} stroke="#663333" strokeWidth="10"/>
    </>
  )
}

export default MatchingGameLine