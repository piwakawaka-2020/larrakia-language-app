import React from 'react'
import { useDrop } from 'react-dnd'

const DropBox = () => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'image',
        drop: () => ({ name: 'DropBox' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if(isActive) {
        backgroundColor = 'blue'
    } else if (canDrop) {
        backgroundColor = 'green'
    }
    return (
        <div ref={drop} style={{backgroundColor }} className="drop-box mx-auto">
            {isActive ? 'Drop here' : 'Drag here'}
        </div>
    )
}

export default DropBox