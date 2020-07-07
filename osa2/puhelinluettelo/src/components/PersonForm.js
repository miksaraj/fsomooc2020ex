import React from 'react'
import InputField from './InputField'

const PersonForm = (props) => {
    const {
        addPerson,
        newName,
        handleNameChange,
        newNumber,
        handleNumberChange
    } = props

    return (
        <form onSubmit={addPerson}>
            <InputField text="Name" value={newName} onChange={handleNameChange} />
            <InputField text="Number" value={newNumber} onChange={handleNumberChange} />
            <button type="submit">Add</button>
        </form>
    )
}

export default PersonForm