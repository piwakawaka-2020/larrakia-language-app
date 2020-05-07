import React from 'react'
import { useDrop } from 'react-dnd'

const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-100px',
    marginLeft: '-100px'
}

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
        <div ref={drop} style={{ ...style, backgroundColor }}>
            {isActive ? 'Drop here' : 'Drag here'}
        </div>
    )
}

export default DropBox