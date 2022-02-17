import React from "react";
import CreateActivity from "../CreateAct/CreateAct";
import SearchBar from "../SearchBar/SearchBar";
import SelectorByContinent from "../Selector/Selector";
import SelectorByAlph from "../Selector/SelectorAlph";
import SelectByPopulation from "../Selector/SelectorByPopulation";
import { NavContaier } from "../../styles/NavBar/NavBar";
import SelectorByActivity from '../Selector/SelectorAct'

export function NavBar({setOrder}){
    return(
        <NavContaier>
        <CreateActivity/>
        <SearchBar/>
        <SelectorByContinent/>
        <SelectorByAlph
        setOrder={setOrder}/>
        <SelectByPopulation
        setOrder={setOrder}/>
        <SelectorByActivity/>
        </NavContaier>
    )
}