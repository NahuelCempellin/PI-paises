import {React} from "react";
import { useDispatch } from "react-redux";
import {filterByAlph} from '../../store/Actions/CountryActions'
import {Select} from '../../styles/NavBar/NavBar'

export default function SelectorByAlph({setOrder}){
    console.log(setOrder)
    const dispatch= useDispatch();
    
   


    function handleOrder(e){
        e.preventDefault();
        dispatch(filterByAlph(e.target.value));
        setOrder(`Ordered ${e.target.value}`);
        
    }

    return(
        <Select onChange={(e)=>handleOrder(e)}>
            <option value='default'>Default</option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
        </Select>
    )
}