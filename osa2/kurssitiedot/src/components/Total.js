import React from 'react'

const Total = ({ parts }) => {
    const reducer = (acc, obj) => acc + obj.exercises
    const total = parts.reduce(reducer, 0)

    return (
        <strong>
            Total of {total} exercises
        </strong>
    )
}

export default Total