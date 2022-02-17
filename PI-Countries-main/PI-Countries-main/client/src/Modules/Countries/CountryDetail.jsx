import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../store/Actions/CountryActions";
import { CardDetailed,ContainerDiv } from "../../styles/CardDetail/CardDetail";
import {Button} from '../../styles/Buttons/ButtonAct'

 export default function CountryDetail(props){
    const{idL}= useParams();
    console.log(idL)
  console.log(props)
  const dispatch= useDispatch();
    const AllActs= useSelector((state)=>state.Activity);


  useEffect(()=>{
      dispatch(getDetail(idL))
  },[dispatch,idL])
    

    const Country= useSelector((state)=> state.Detail); 
    console.log(Country)
   

        return(
            <ContainerDiv>
            <CardDetailed>
                        <h2>{Country.name}</h2>
                        <h3>{Country.idL}</h3>
                        <img  src={Country.flag}/>
                        <p>Continent: {Country.continent}</p>
                        <p>Capital: {Country.capital}</p>
                        <p>Subregion: {Country.subregion}</p>
                        <p>Area: {Country.area} km²</p>
                        <p>Population: {Country.population}</p>
                        <p>Tourist Activities: {Country.touristActs?.map((act)=>act.name+(' '))}</p>
                        <Link to='/countries'>
                            <Button>Back</Button>
                        </Link>
             </CardDetailed>
             </ContainerDiv>
        )
    
}


