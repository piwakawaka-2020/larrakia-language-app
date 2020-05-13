import React from 'react'

const DictionaryEntry = props => {
  const word = props.word

  // <span>PLAY</span>
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img src={word.imageUrl} alt={"Image of a " + word.englishWord} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2>Gulumirrgin: {word.gulumirrginWord}</h2>
            <h2>English: {word.englishWord}</h2>
            <button type="button" class="btn btn-primary">Play Audio</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DictionaryEntry
