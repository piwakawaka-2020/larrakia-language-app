import React from 'react'
import { useDrag } from 'react-dnd'
import SuccessTick from './SuccessTick'
import { render } from 'enzyme'

const Image =  ({ image, word, displayedWord, changeRoundHandler, checkmarkHandler }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { word, type: 'image' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                if (item.word === displayedWord) {
                    checkmarkHandler()
                    setTimeout(changeRoundHandler, 1800)
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
