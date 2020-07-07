import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import InputField from './components/InputField'
import PersonForm from './components/PersonForm'

const App = () => {
	useEffect(() => {
		personService
		.getAll()
		.then(data => {
			setPersons(data)
		})
	}, []) 

	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')

	const addPerson = (event) => {
		event.preventDefault()
		const personObj = {
			name: newName,
			number: newNumber
		}
		if (!persons.some(person => person.name === newName)) {
			personService
			.create(personObj)
			.then(data => {
				setPersons(persons.concat(data))
				setNewName('')
				setNewNumber('')
			})
		} else if (persons.some(person => (person.name === newName && person.number === newNumber))) {
			alert(`${newName} is already added to the phonebook with the given number.`)
		} else {
			if (window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)) {
				const id = persons.find(p => p.name === newName).id
				personService
				.update(id, personObj)
				.then(data => {
					setPersons(persons.map(p => p.id !== id ? p : data))
					setNewName('')
					setNewNumber('')
				})
			}
		}
	}

	const deletePerson = (id) => {
		personService
		.del(id)
		.then(() => {
			setPersons(persons.filter(p => p.id !== id))
		})
	}

	const confirmDelete = (event) => {
		const id = parseInt(event.target.value)
		const name = persons.find(p => p.id === id).name
		if (window.confirm(`Delete ${name}?`)) {
			deletePerson(id)
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
		<Persons persons={personsToShow} confirmDelete={confirmDelete} />
		</div>
	)
}

export default App