import React from 'react'
import { useDrag } from 'react-dnd'

const style = {
    width: '512px',
    height: '375px'
}

const Image =  ({ image, word, displayedWord, changeRoundHandler }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { word, type: 'image' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                if (item.word === displayedWord) {
                    alert("Winning!!")
                    changeRoundHandler()
                } else {
                    alert("WRONG!!!")
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{opacity}}>
            <img src={image} alt={word} />
        </div>
    )
}

export default Image
