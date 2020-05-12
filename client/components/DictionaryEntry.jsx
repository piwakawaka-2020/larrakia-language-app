import React from 'react'

const DictionaryEntry = props => {
  const word = props.word

  // <img src={word.imageUrl} alt="Image of a " + {word.englishWord}/>
  return (
    <li>
      <span>PLAY</span>
      <span>Gulumirrgin: {word.gulumirrginWord}</span>
      <span>English: {word.englishWord}</span>
    </li>
  )
}

export default DictionaryEntry
