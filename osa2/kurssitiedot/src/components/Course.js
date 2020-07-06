import React from 'react'
import Total from './Total'
import Header from './Header'
import Parts from './Parts'

const Course = ({ course }) => {
    const name = course.name
    const parts = course.parts

    return (
        <div>
            <Header name={name} />
            <Parts parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default Course