import React from 'react'
import { connect } from 'react-redux'

import DictionaryEntry from './DictionaryEntry'

class Dictionary extends React.Component {
  state = {
    //wordList: [],
    isSortedForGulumirrgin: true
  }

  // componentDidUpdate () {
  //   this.setState({
  //     wordList: [...this.props.words]
  //   })
  // }

  handleClick = event => {
    console.log("HANDLING CLICK")
    if (isSortedForGulumirrgin) {
      console.log("BEEP")
      this.props.wordList.sort(compareEnglishWords)
      isSortedForGulumirrgin = false
    } else {
      console.log("BOOP")
      this.props.wordList.sort(compareGulumirrginWords)
      isSortedForGulumirrgin = true
    }
  }


  render () {
    let dictionaryEntries = []
  
    if (this.props.wordList.length > 0) {
      this.props.wordList.sort(compareGulumirrginWords)
  
      dictionaryEntries = this.props.wordList.map(word => {
        return <DictionaryEntry key={word.id} word={word} />
      })
    }

    return (
      <div className="dictionary">
        <h2>DICTIONARY</h2>
        <button onClick={this.handleClick}>Sort by {this.props.isSortedForGulumirrgin ? "English" : "Gulumirrgin"} alphabetical order?</button>
        <ul>
          {dictionaryEntries}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    wordList: [...state.words]
  }
}

//Generic function for sorting an array by alphabetical order
const compareWords = (a, b) => {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
}

//Will sort an array of word objects by alphabetical order of their Gulumirrgin Word
const compareGulumirrginWords = (a, b) => {
  return compareWords(a.gulumirrginWord.toUpperCase(), b.gulumirrginWord.toUpperCase())
}

//Will sort an array of word objects by alphabetical order of their English Word
const compareEnglishWords = (a, b) => {
  return compareWords(a.englishWord.toUpperCase(), b.englishWord.toUpperCase())
}

export default connect(mapStateToProps)(Dictionary)
