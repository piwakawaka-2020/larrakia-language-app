import React from 'react'
import { connect } from 'react-redux'

import DictionaryEntry from './DictionaryEntry'
import { compareEnglishWords, compareGulumirrginWords } from '../utilities/sorting'

class Dictionary extends React.Component {
  state = {
    sortForGulumirrgin: true
  }

  handleClick = event => {
    this.setState({ sortForGulumirrgin: !this.state.sortForGulumirrgin })
  }

  render () {
    let sortedWords = [...this.props.words]
    let dictionaryEntries = []
  
    if (this.state.sortForGulumirrgin) {
      sortedWords.sort(compareGulumirrginWords)
    } else {
      sortedWords.sort(compareEnglishWords)
    }
    
    dictionaryEntries = sortedWords.map(word => {
      return <DictionaryEntry key={word.id} word={word} />
    })

    return (
      <div className="dictionary">
        <h2>DICTIONARY</h2>
        <button onClick={this.handleClick}>Sort by {this.state.sortForGulumirrgin ? "English" : "Gulumirrgin"} alphabetical order?</button>
        <ul>
          {dictionaryEntries}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    words: state.words
  }
}

export default connect(mapStateToProps)(Dictionary)
