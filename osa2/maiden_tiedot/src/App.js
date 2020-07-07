import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Display from './components/Display'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const getCountryList = () => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(res => {
            setCountries(res.data)
        })
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    
    const filteredCountries = filter === ''
        ? countries
        : countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    useEffect(getCountryList, [])

    return (
        <>
            <Search value={filter} onChange={handleFilterChange} />
            <Display countries={filteredCountries} />
        </>
    )
}

export default App