import React, { useState } from 'react';
import Persons from './components/Persons'
import InputField from './components/InputField'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
	  { name: 'Arto Hellas', number: '040-1231244' }
	])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
	  event.preventDefault()
	  if (!persons.some(person => person.name === newName)) {
		const personObj = {
			name: newName,
			number: newNumber
		}
		setPersons(persons.concat(personObj))
		setNewName('')
		setNewNumber('')
	  } else {
		  alert(`${newName} is already added to the phonebook`)
	  }
  }

  const handleNameChange = (event) => {
	  setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
	  setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
	  setFilter(event.target.value)
  }

  const personsToShow = filter === ''
	  ? persons
	  : persons.filter(person => (
		  person.name.toLowerCase().includes(filter.toLowerCase()) || person.number.includes(filter)
		))

  return (
	<div>
	  <h2>Phonebook</h2>
	  <InputField text="Search" value={filter} onChange={handleFilterChange} />
	  <h3>Add a new contact</h3>
	  <PersonForm
		  addPerson={addPerson}
		  newName={newName}
		  handleNameChange={handleNameChange}
		  newNumber={newNumber}
		  handleNumberChange={handleNumberChange}
		/>
	  <h3>Numbers</h3>
	  <Persons persons={personsToShow} />
	</div>
  )
}

export default App