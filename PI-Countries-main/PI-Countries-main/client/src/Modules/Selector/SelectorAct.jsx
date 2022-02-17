import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../styles/NavBar/NavBar";
import {filterByAct} from '../../store/Actions/CountryActions';

export default function SelectorByActivity(){

    const dispatch= useDispatch();
    const allActs= useSelector((state)=> state.Activity);
    console.log(allActs)

   

    function handleFilterActivity(e){
        e.preventDefault();
        dispatch(filterByAct(e.target.value))
        
    }



return(
    <nav>
    <Select   onChange={(e)=>handleFilterActivity(e)}>
         <option value='All'>All</option> 
        
        {
            allActs.map(el=>(
                
                <option value = {el.idL} key= {el}>{el.name}</option>
            ))
            
        }
    </Select>

    </nav>
)
    }