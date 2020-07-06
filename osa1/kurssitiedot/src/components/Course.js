import React from 'react'
import { Total, Parts, Header } from './'

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