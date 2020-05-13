import React from 'react'
import { connect } from 'react-redux'

import DictionaryEntry from './DictionaryEntry'
import { compareEnglishWords, compareGulumirrginWords } from '../utilities/sorting'
import BurgerMenu from './BurgerMenu'

class Dictionary extends React.Component {
  state = {
    sortForGulumirrgin: true
  }

  handleClick = event => {
    this.setState({ sortForGulumirrgin: !this.state.sortForGulumirrgin })
  }

  render() {
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
        <BurgerMenu />
        <div className="container">
          <div className="icon-container">
            <img className="wl-icon" src="/images/longbum.png" alt="Danijarra or Long Bum" />
          </div>
          <h1 className="text-center">DICTIONARY</h1>
          <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.handleClick}>
            Sort by {this.state.sortForGulumirrgin ? "English" : "Gulumirrgin"} alphabetical order?
          </button>
          <div className="p-5">
            {dictionaryEntries}
          </div>
        </div>
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
