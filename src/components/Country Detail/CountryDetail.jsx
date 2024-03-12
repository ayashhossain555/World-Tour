import CountryData from "../Country Data/CountryData";

const CountryDetail = (props) => {
    // const {country, handleVisitedCountry, handleVisitedFlags} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                handleVisitedCountry={handleVisitedCountry} 
                handleVisitedFlags={handleVisitedFlags} 
                country={country}
            ></CountryData> */}
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetail;