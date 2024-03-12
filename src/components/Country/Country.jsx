import { useState } from 'react';
import './Country.css';
import CountryDetail from '../Country Detail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags?.png} alt="" />
            <h3 style={{color: visited? 'yellow':'white'}}>{name?.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add as Favorite Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
            {visited && 'I have visited this country.'}
            <hr />
            <CountryDetail
                handleVisitedCountry={handleVisitedCountry} 
                handleVisitedFlags={handleVisitedFlags} 
                country={country}
            ></CountryDetail>
        </div>
    );
};

export default Country;