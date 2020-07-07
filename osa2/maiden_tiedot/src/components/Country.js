import React from 'react'

const Country = ({ country }) => {
    const {
        name,
        capital,
        population,
        languages,
        flag
    } = country

    return (
        <div>
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <h2>Languages</h2>
            <ul>
                {languages.map(lang =>
                    <li key={lang.iso639_1}>{lang.name}</li>
                )}
            </ul>
            <img src={flag} alt={name} width="200" height="200" />
        </div>
    )
}

export default Country