import React from 'react'
import Country from './Country'

const Display = ({ countries }) => {
    const count = countries.length

    if (count > 10) {
        return (
            <p>Too many matches, specify another filter.</p>
        )
    } else if (count === 1) {
        return (
            <Country country={countries[0]} />
        )
    } else {
        return (
            <ul>
                {countries.map(country =>
                    <li key={country.alpha2Code}>{country.name}</li>    
                )}
            </ul>
        )
    }
}

export default Display