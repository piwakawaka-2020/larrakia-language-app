import React from 'react'
import { useDrag } from 'react-dnd'
import SuccessTick from './SuccessTick'
import { render } from 'enzyme'

const Image =  ({ 
    image, word, displayedWord, changeRoundHandler, checkmarkHandler, failMessageHandler
    }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { word, type: 'image' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                if (item.word === displayedWord) {
                    checkmarkHandler()
                    setTimeout(changeRoundHandler, 1800)
                } else {
                    failMessageHandler()
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
            <img src={image} alt={word} className="dnd-image" />
        </div>
    )
}

export default Image
