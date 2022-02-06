import { React,useEffect } from "react";
import {connect} from 'react-redux'
import getAllCountries from '../../store/Actions/CountryActions'


 function CountryCards({countries,getAllCountries}){
  
    useEffect(()=>{
    getAllCountries();
    
    },[])
    return (
        <div>
            {countries.map((country)=>{
                return(
                    <div>
                    <p>{country.name}</p>
                    <p>ID:{country.idL}</p>
                    <img src={country.flag}/>
                    <p>Continent: {country.continent}</p>
                    <p>Capital: {country.capital}</p>
                    <p>subregion: {country.subregion}</p>
                    <p>Area: {country.area}</p>
                    <p>Population: {country.population}</p>

                    </div>
                    
                   
                )
            })}
        </div>
    )
}

const mapStateToProps =state=>{
    return{
        countries: state.countries
    }
};
const mapDispatchToProps= dispatch=>{
return{
    getAllCountries: ()=>{
        dispatch(getAllCountries())
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryCards);