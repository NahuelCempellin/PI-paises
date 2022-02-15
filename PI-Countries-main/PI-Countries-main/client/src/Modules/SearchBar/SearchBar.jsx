import {React, useState} from "react";
import { useDispatch } from "react-redux";
import { searchName, getAllCountries } from "../../store/Actions/CountryActions";
import { Input } from "../../styles/SearchBar/SearchBar";
import { Button } from "../../styles/Buttons/ButtonAct";
export default function SearchBar(){
    const dispatch= useDispatch();
    const [payload, setName]= useState('');

    function handleSearchChange(arg){
        arg=== ''?
        dispatch(getAllCountries())
        : 
        dispatch(searchName(arg))
    }

      function handleInputChange(e){
        e.preventDefault();
        handleSearchChange(e.target.value);
         setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        handleSearchChange(payload)
        setName('')
    }


    return(
        <div>
            <Input type='text'
            placeholder="Search..."
            onChange={(e)=> handleInputChange(e)}/>
            {/* <Button type="submit"
            onClick={(e)=> handleSubmit(e)}>Search</Button> */}
            
            
        </div>
    )
}