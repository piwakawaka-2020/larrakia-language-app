import React from 'react'
import { connect } from 'react-redux'

import DictionaryEntry from './DictionaryEntry'
import { compareEnglishWords, compareGulumirrginWords } from '../utilities/sorting'
import BurgerMenu from './BurgerMenu'

class Dictionary extends React.Component {
  state = {
    sortForGulumirrgin: true
  }

  handleClickGulumirrgin = event => {
    this.setState({ sortForGulumirrgin: true })
  }

  handleClickEnglish = event => {
    this.setState({ sortForGulumirrgin: false })
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
          <h1 className="text-center neuchaFont"><strong>Dictionary</strong></h1>
          <div classname="row justify-content-center">
            <div className="col btn-group btn-group-toggle" data-toggle="buttons">
              <button className="w-50 btn btn-primary btn-lg border-dark neuchaFont" onClick={this.handleClickGulumirrgin}>Sort in Gulumirrgin</button>
              <button className="w-50 btn btn-secondary btn-lg border-dark neuchaFont" onClick={this.handleClickEnglish}>Sort in English</button>
            </div>
          </div>
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
