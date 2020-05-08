import React from 'react'
import { useDrop } from 'react-dnd'

const DropBox = ({ word }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: 'image',
        drop: () => ({ name: 'target' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = canDrop && isOver
    console.log(canDrop)
    let backgroundColor = '#FFFFFF'
    if(isActive) {
        backgroundColor = '#008000'
    } else if (canDrop) {
        backgroundColor = '#FFFF66'
    }

    return (
        <div ref={drop} style={{backgroundColor}} className="drop-box mx-auto">
            {isActive ? 'Drop here' : 'Drag here'}
        </div>
    )
}

export default DropBox