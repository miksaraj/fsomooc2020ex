import React from 'react'
import Person from './Person'

const Persons = ({ persons, confirmDelete }) => (
    <ul>
        {persons.map(person =>
            <Person key={person.id} person={person} confirmDelete={confirmDelete} />
        )}
    </ul>
)

export default Persons