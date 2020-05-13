import React from 'react'

class DictionaryEntry extends React.Component {
  state = {
    lastSoundPlayed: 0
  }

  canPlaySound() {
    const currentTime = (new Date()).getTime()
    const threshold = 8000
    return currentTime > (this.state.lastSoundPlayed + threshold)
  }

  playSound() {
    const sound = new Audio()
    // create sound object
    sound.src = this.props.word.audioUrl
    // call sound object
    sound.play()
    // change state to time of laste played sound
    this.setState({
      lastSoundPlayed: (new Date()).getTime()
    })
  }

  handleClick = event => {
    if (this.canPlaySound()) {
      this.playSound()
    }
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-4">
            <img src={this.props.word.imageUrl} alt={"Image of a " + this.props.word.englishWord} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2>Gulumirrgin: {this.props.word.gulumirrginWord}</h2>
              <h2>English: {this.props.word.englishWord}</h2>
              {this.props.word.audioUrl !== null &&
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Listen to Word ▶</button>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DictionaryEntry
