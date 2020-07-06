import React from 'react'

const Total = ({ parts }) => {
    let total = 0
    parts.forEach(part => {
        total += part.exercises
    })
    return (
        <strong>
            Total of {total} exercises
        </strong>
    )
}

export default Total