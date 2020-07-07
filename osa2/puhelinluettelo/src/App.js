import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import InputField from './components/InputField'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
	useEffect(() => {
		personService
		.getAll()
		.then(data => {
			setPersons(data)
		})
		.catch(e => {
			setAlertMessage('Error fetching persons from database!')
			setAlertType('error')
			setTimeout(() => {
				setAlertMessage(null)
				setAlertType('')
			}, 5000)
		})
	}, []) 

	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const [alertMessage, setAlertMessage] = useState(null)
	const [alertType, setAlertType] = useState('')

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
				setAlertMessage(`Added ${newName}`)
				setAlertType('success')
				setTimeout(() => {
					setAlertMessage(null)
					setAlertType('')
				}, 5000)
			})
			.catch(e => {
				setAlertMessage(`Error adding ${newName} to database!`)
				setAlertType('error')
				setTimeout(() => {
					setAlertMessage(null)
					setAlertType('')
				}, 5000)
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
					setAlertMessage(`Updated ${newName}`)
					setAlertType('success')
					setTimeout(() => {
						setAlertMessage(null)
						setAlertType('')
					}, 5000)
				})
				.catch(e => {
					setAlertMessage(`Error updating ${newName}!`)
					setAlertType('error')
					setTimeout(() => {
						setAlertMessage(null)
						setAlertType('')
					}, 5000)
				})
			}
		}
	}

	const deletePerson = (id, name) => {
		personService
		.del(id)
		.then(() => {
			setPersons(persons.filter(p => p.id !== id))
			setAlertMessage(`${name} deleted successfully`)
			setAlertType('success')
			setTimeout(() => {
				setAlertMessage(null)
				setAlertType('')
			}, 5000)
		})
		.catch(e => {
			setAlertMessage(`Person ${name} was already removed from server!`)
			setAlertType('error')
			setTimeout(() => {
				setAlertMessage(null)
				setAlertType('')
			}, 5000)
		})
	}

	const confirmDelete = (event) => {
		const id = event.target.value
		const name = persons.find(p => p.id === id).name
		if (window.confirm(`Delete ${name}?`)) {
			deletePerson(id, name)
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
			<Notification message={alertMessage} type={alertType} />
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