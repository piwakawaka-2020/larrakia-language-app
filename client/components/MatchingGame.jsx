import React from 'react'
import { connect } from 'react-redux'

// import child components
import Instructions from './Instructions'
import ProgressBar from './ProgressBar'
import MatchingGameImage from './MatchingGameImage'
import MatchingGameWord from './MatchingGameWord'
import WinScreen from './WinScreen'
import MatchingGameLine from './MatchingGameLine'
import HowToPlay from './HowToPlay'
import HomeButton from './HomeButton'

export class MatchingGame extends React.Component {

  state = {
    currentScore: 0,
    scoreToWin: 3,
    imageList: [],
    wordList: [],
    selectedImage: "a",
    selectedWord: "b",
    completedPairs: [],
    lines: []
  }

  componentDidMount() {
    // selects word/image lists for game use
    const startingArray = this.filterInvalid(this.props.words)
    const wordList = this.randomiser(startingArray, 3)
    const imageList = this.randomiser(wordList, 3)
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
      if(randomisedArray.length == arrayLength) {return randomisedArray}
    }
  }

  // sets state with selected image id
  handleImageClick(id) {
    const oldId = this.state.selectedImage
    this.setState({
      selectedImage: id,
    })
    this.evalPair(id, this.state.selectedWord)
    document.getElementById(`i${id}`).style.backgroundColor = "#fa9d00"
    document.getElementById(`i${oldId}`).style.backgroundColor = "#cc9900"

  }

  // sets state with selected word id
  handleWordClick(id) {
    const oldId = this.state.selectedWord
    this.setState({
      selectedWord: id,
    })
    this.evalPair(id, this.state.selectedImage)
    document.getElementById(`w${id}`).style.backgroundColor = "#fa9d00"
    document.getElementById(`w${oldId}`).style.backgroundColor = "#cc9900"
  }

  // evaluates if there is a matching pair
  evalPair(id1, id2) {
    id1 === id2 && !this.state.completedPairs.includes(id1) && this.updateMatch(id1)
  }

  // updates state after successfull matching
  updateMatch(id){
    this.setState({
      currentScore: this.state.currentScore + 1,
      completedPairs: [...this.state.completedPairs, id]
    }) 
    this.drawLine(id)
  }

  // draws line between correct items
  drawLine(id) {
    // get 1st element by id
    const element1 = document.getElementById(`i${id}`)
    // get 2nd element by id
    const element2 = document.getElementById(`w${id}`)
    // get x/y coords for 1st element
    const element1Coord = element1.getBoundingClientRect()
    // get x/y coords for 2nd element
    const element2Coord = element2.getBoundingClientRect()
    // create obj with nessacery details
    const lineObj = {
      x1: element1Coord.x -468,
      y1: element1Coord.y,
      x2: element2Coord.x -200,
      y2: element2Coord.y,
    }
    // push to state 
    this.setState({
      lines: [...this.state.lines, lineObj]
    })
  }

  render(){
    const hasWon = this.state.currentScore === 3
    return (
      <div>
        <HomeButton /> 
        {hasWon ? <WinScreen /> :
        <>       
          <HowToPlay>
            <img src="/gifs/matchingGameHTP.gif" alt="Matching game demo gif"/>
          </HowToPlay>
          <h1 className='matching-game-title'><strong>Matching Game</strong></h1>
          <div className='matching-game-container'>
            <svg width={750} height={680}>
              {
                this.state.lines.map((line, index) => 
                <MatchingGameLine 
                  key={index}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                />)
              }
            </svg>
            <div className='matching-game-image-container'>
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
            <div className='matching-game-word-container'>
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
            <div className='matching-game-instructions-container' >
              <Instructions>
                <li>Select a word or image</li>
                <li>Select the word or image that matches</li>
                <li>If they match a line will link them</li>
                <li>If they dont try again</li>
                <li>Link them all to win the game</li>
              </Instructions>
            </div>
          </div>
          <ProgressBar currentScore={this.state.currentScore} scoreToWin={this.state.scoreToWin}/>
        </>}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
      words: state.words
  }
}

export default connect(mapStateToProps)(MatchingGame)