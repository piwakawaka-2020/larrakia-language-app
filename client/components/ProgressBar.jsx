import React from 'react'

const ProgressBar = props => {
  let percentComplete = (props.currentScore / props.scoreToWin) * 100
  
  return (
    <div>
      <div className="progress shadow-sm m-3">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          style={{width: percentComplete + '%'}}
          aria-valuenow={props.currentScore}
          aria-valuemin="0"
          aria-valuemax={props.scoreToWin} >
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
