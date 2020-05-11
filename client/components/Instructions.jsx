import React from 'react'

const Instructions = ({ children }) => {
    return (
        <div>
            <h3>How to Play:</h3>
            <ol>
                {children}
            </ol>
        </div>
    )
}

export default Instructions