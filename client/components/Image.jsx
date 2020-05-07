import React from 'react'
import { useDrag } from 'react-dnd'

const style = {
    width: '512px',
    height: '375px'
}

const Image =  ({ image, id }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { image, type: 'image' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert('You did it')
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0.4 : 1
    return (
        <div ref={drag} style={{opacity}}>
            <img src={image} alt=""/>
        </div>
    )
}

export default Image
