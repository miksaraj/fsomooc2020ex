import React from 'react'

const Person = ({ person, confirmDelete }) => (
    <li>
        {person.name} {person.number} <button value={person.id} onClick={confirmDelete}>Delete</button>
    </li>
)

export default Person