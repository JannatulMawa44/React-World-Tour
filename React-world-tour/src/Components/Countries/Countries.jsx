import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
   const [Countries, setCountries] = useState([]);

   const [visitedCountries, setVisitedCountries] = useState([]);

   const [visitedFlags, setVisitedFlags] = useState([]);






   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(data => setCountries(data));

   }, [])

   // country add//// 

   const handleVisitedCountry = country => {
      console.log('add this to your visited country')
      // console.log(country);
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
   }


   // flag add//

   const handleVisitedFlags = flags => {
      //console.log('flag adding');
      const newVisitedFlags = [...visitedFlags, flags];
      setVisitedFlags(newVisitedFlags);
   }


   return (
      <div >
         <h3>Countries : {Countries.length}</h3>
         {/*visited countries */}

         <div>
            <h5>Visited countreis : {visitedCountries.length}</h5>
            <ul>
               {
                  visitedCountries.map(country => <li key={country.cca3}>
                     {country.name.common}
                  </li>)
               }
            </ul>
         </div>

        {/* <div className="flag-container">
         {
            visitedFlags.map((falg, idx)=> <img key={idx} src={flag}></img>)
         }

        </div> */}
         <div className="flag-container">
            {visitedFlags.map((flag, index) => (
               <img key={index} src={flag} alt={`Flag ${index}`} />
            ))}
         </div>


{/* display countries */}
         <div className="country-container">
            {
               Countries.map(country => <Country key={country.cca3}
                  handleVisitedCountry={handleVisitedCountry}
                  handleVisitedFlags={handleVisitedFlags}
                  country={country}></Country>)

            }
         </div>
      </div>
   );
};

export default Countries;



