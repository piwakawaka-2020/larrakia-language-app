import React from 'react'
import { connect } from 'react-redux'

// import child components
import Instructions from './Instructions'
import ProgressBar from './ProgressBar'
import MatchingGameImage from './MatchingGameImage'
import MatchingGameWord from './MatchingGameWord'

export class MatchingGame extends React.Component {

  state = {
    hasWon: false,
    currentScore: 0,
    scoreToWin: 6,
    imageList: [],
    wordList: [],
    selectedImage: '',
    selectedWord: '',
  }

  componentDidMount() {
    // selects word/image lists for game use
    const startingArray = this.filterInvalid(this.props.words)
    const wordList = this.randomiser(startingArray, 6)
    const imageList = this.randomiser(wordList, 6)
    this.setState({
      imageList: imageList,
      wordList: wordList
    })
  }

  // removes any words that do not have corrosponding images
  filterInvalid (array){
    return array.filter(word => word.imageUrl != null)
  }

  // randomly sorts array provided to a length provided
  randomiser(array, arrayLength){
    // starting input
    let passedArray = [...array]
    // randomised output
    let randomisedArray = []
    // loop through passed array to create new randomised array
    while (randomisedArray.length < arrayLength){
      // get random index
      let randomIndex = Math.floor(Math.random() * (passedArray.length))
      // push item from passed array to randomised array
      randomisedArray.push(passedArray[randomIndex])
      // exclude item from future instances of the loop
      passedArray.splice(randomIndex, 1)
      console.log('in loop');
      if(randomisedArray.length == arrayLength) {return randomisedArray}
    }
  }

  handleImageClick (id) {
    console.log(id);
    this.setState({
      selectedImage: id,
    })
  }

  handleWordClick (id) {
    console.log(id);
    this.setState({
      selectedWord: id,
    })
  }

  render(){
    return (
      this.state.hasWon ? <WinScreen /> :
      <>
        <h1>Matching Game</h1>
        <div className="row">
          <div className="col-sm-4">
            {
              this.state.imageList.map(listItem => 
              <MatchingGameImage 
                key={`i${listItem.id}`} 
                id={listItem.id} 
                image={listItem.imageUrl} 
                click={this.handleImageClick.bind(this)}
              />)
            }
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            {
              this.state.wordList.map(listItem => 
              <MatchingGameWord 
                key={`i${listItem.id}`} 
                id={listItem.id} 
                word={listItem.gulumirrginWord} 
                click={this.handleWordClick.bind(this)}
              />)
            }
          </div>
        </div>
        <ProgressBar currentScore={this.state.currentScore} scoreToWin={this.state.scoreToWin}/>
        <Instructions>
          <li>Select a word or image</li>
          <li>Select the word or image that matches</li>
          <li>If they match a line will link them</li>
          <li>If they dont try again</li>
          <li>Link them all to win the game</li>
        </Instructions>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
      words: state.words
  }
}

export default connect(mapStateToProps)(MatchingGame)