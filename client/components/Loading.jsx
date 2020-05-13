import React from 'react'

const Loading = props => {
  return (
    <div className="container h-100 ">
      <div className="d-flex justify-content-center align-items-center">
        <img id="loading-gif" src="/gifs/animated-circle.gif" />
      </div>
    </div>
  )
}

export default Loading