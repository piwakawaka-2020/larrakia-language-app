import React from 'react'

const Instructions = ({ children }) => {
    return (
        <div className="instructions">
            <h3>How to Play:</h3>
            <ol className="">
                {/* Wrap <li> tags with <Instructions> tags */}
                {children}
            </ol>
        </div>
    )
}

export default Instructions