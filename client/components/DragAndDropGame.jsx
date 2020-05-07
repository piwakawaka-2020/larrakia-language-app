// Required imports
import React, { Component } from 'react'
import { connect } from 'react-redux'


//Children Components imports
import Image from './Image'
import Word from './Word'
import DropBox from './DropBox'

class DragAndDropGame extends Component {

    state = {
        words: [
            {
                word: "Banimadla",
                isCorrect: false
            },
            {
                word: "Damabila",
                isCorrect: false
            },
            {
                word: "Danijarra",
                isCorrect: false
            },
            {
                word: "Datlawa",
                isCorrect: false
            },
            {
                word: "Danggalaba",
                isCorrect: false
            }
        ],
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-y9timoHekXtKpwoTBAOm9ti0r-AzP6TkCZ1UtgcjdFvwo7xW&usqp=CAU", "https://lh3.googleusercontent.com/proxy/XZipz_CZGRv6vOydUVUn6fcHulzhHwwAlgZr0NjwR183Oi3X9Q3XTBKiUZRyTTRDs3FpAvKEjNo4A37ePglw3fi6-5tdDFYH-YZGY8mmVt-1ykU"]
    }

    render() {
        const { images } = this.state
        const { words } = this.props
        return (
            <div>
                {/* Add a HowToPlay component modal(a popup window inside browser) with instructions on how to play game */}

                <div>
                    <DropBox />
                </div>

                <div>
                    {words.map((word) => {
                        return <Image key={word.id} image={word.image_url} />
                    })}
                </div>


                {/* <div>
                    {words.map((word, index) => {
                        return <Word key={index} word={word.word} />
                    })}
                </div> */}

                {/* Add a ProgressBar component to show how far into the game the user is */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        words: state.words
    }
}

export default connect(mapStateToProps)(DragAndDropGame)