import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, population, name, flags} = props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h2>Region: {region}</h2>
            <h3>Population: {population}</h3>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;