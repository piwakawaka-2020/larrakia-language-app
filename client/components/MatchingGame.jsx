import React from 'react'
import { connect } from 'react-redux'

// import child components
import Instructions from './Instructions'
import ProgressBar from './ProgressBar'

export class MatchingGame extends React.Component {

  state = {
    hasWon: false,
    currentScore: 0,
    scoreToWin: 6,
    imageList: [],
    wordList: []
  }

  componentDidMount() {
    const startingArray = this.filterInvalid(this.props.words)
    console.log(startingArray);
    
    const wordList = this.randomiser(startingArray, 6)
    

    
    console.log(wordList);
    const imageList = this.randomiser(wordList, 6)
    
    console.log(wordList ,imageList);
    console.log(startingArray);
    this.setState({
      imageList: imageList,
      wordList: wordList
    })
  }

  // http://localhost:3000/game/matching
  
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

  render(){
    return (
      this.state.hasWon ? <WinScreen /> :
      <>
        <h1>Matching Game</h1>
        <div className="row">
          <div className="col-sm-4">.col-sm-4</div>
          <div className="col-sm-4">.col-sm-4</div>
          <div className="col-sm-4">.col-sm-4</div>
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