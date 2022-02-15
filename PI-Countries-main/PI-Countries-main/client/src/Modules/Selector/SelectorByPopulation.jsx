import React from "react";
import { useDispatch } from "react-redux";
import {filterByPopulation} from '../../store/Actions/CountryActions'
import {Select} from '../../styles/NavBar/NavBar'

export default function SelectByPopulation({setOrder}){
    const dispatch= useDispatch();

    function handlerOrder(e){
        e.preventDefault();
        dispatch(filterByPopulation(e.target.value));
        setOrder(`Ordered ${e.target.value}`)
    }

    return(
        <Select onChange={(e)=>handlerOrder(e)}>
            <option value='default'>Default</option>
            <option value='Min'>Min to Max</option>
            <option value='Max'>Max to Min</option>
        </Select>
    )
}