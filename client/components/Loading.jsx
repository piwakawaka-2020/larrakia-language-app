import React from 'react'

const Loading = props => {
  return (
    <div className="container h-100">
      <div mx-auto my-auto>
        <img id="loading-gif" src="/gifs/animated-circle.gif" />
      </div>
    </div>
  )
}

export default Loading