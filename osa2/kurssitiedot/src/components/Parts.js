import React from 'react'
import Part from './Part'

const Parts = ({ parts }) => (
    <ul>
        {parts.map(part => 
            <Part key={part.id} part={part} />
        )}
    </ul>
)

export default Parts