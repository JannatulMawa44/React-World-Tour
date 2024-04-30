// import { useState } from 'react';
// import './Country.css'
// import CountryDetail from '../CountryDetail/CountryDetail';
// const Country = ({country, handleVisitedCountry ,handleVisitedFlags}) => {
//  const {name, flags, population, area, cca3} = country;
//  const[Visited,setVisited] = useState(false);

// const handleVisited = () =>{
//    setVisited(!Visited);
// }

// const passWithParams = () =>handleVisitedCountry(country);

   

//  return (
//       <div className={`country ${Visited ? 'visited' : 'non-visited'}`}>
//          <h3 style={{color:Visited ? 'purple' : 'white'}}> {name.common}</h3>
//          <img src={flags.png} alt="" />
//          <p>Population: {population}</p>
//          <p>area: {area}</p>
//          <p><small>Code:{cca3}</small></p>
//          <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button> <br />

//          <button onClick={() =>handleVisitedFlags(country.flag.png)}>Add Flag</button>

//             <br />
//          <button onClick={handleVisited}>{Visited ? 'Visited':'Going'}</button> <br />
//         {Visited ? 'I have visites this country' : 'I want to visite'}
//          <hr />
//          <CountryDetail>
//             country
//          </CountryDetail>
//       </div>
//    );
// };

// export default Country;



import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{ color: visited ? 'purple' : 'white' }}>{name.common}</h3>
      {flags && flags.png && <img src={flags.png} alt="" />}
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
      <button onClick={() => handleVisitedFlags(flags && flags.png)}>Add Flag</button>
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      <p>{visited ? 'I have visited this country' : 'I want to visit'}</p>
      <hr />
      <CountryDetail 
      country ={country}
      handleVisitedCountry={handleVisitedCountry}
      handleVisitedFlags ={handleVisitedFlags}
      >
      
      </CountryDetail>
    </div>
  );
};

export default Country;
