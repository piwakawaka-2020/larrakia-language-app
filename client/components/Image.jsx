import React from 'react'
import { useDrag } from 'react-dnd'
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
    const cursor = isDragging ? 'grabbing' : 'grab'
    return (
        <div className="dnd-background">
            <div ref={drag} style={{opacity, cursor}} className="image-drag">
                <img src={image} alt={word} className="dnd-image"/>
            </div>
        </div>
    )
}

export default Image
