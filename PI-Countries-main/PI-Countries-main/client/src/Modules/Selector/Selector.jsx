import React from 'react';
import { filterByContinent } from '../../store/Actions/CountryActions';
import { useDispatch } from 'react-redux';
import { Select } from '../../styles/NavBar/NavBar';

export default function SelectorByContinent (){

    const dispatch= useDispatch();

    function handleFilterCountry(e){
        dispatch(filterByContinent(e.target.value))
    }

    return(
        <nav>
            <Select onChange={e=>handleFilterCountry(e)}>
                <option value='All'>All</option>
                <option value='North America' >North America</option>
                <option value='South America'>South America</option>
                <option value='Asia'>Asia</option>
                <option value='Oceania'>Oceania</option>
                <option value='Europe'>Europe</option>
                <option value='Africa'>Africa</option>
            </Select>
        </nav>
    )
}