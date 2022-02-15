import { React,useEffect, useState} from "react";
import { useDispatch, useSelector  } from "react-redux";
import {connect} from 'react-redux'
import {getAllCountries} from "../../store/Actions/CountryActions";
import Paginate from "../Paginacion/Paginate";
import {ContainerGrid } from "../../styles/CardStyles/CountryCards.js";
import {NavBar} from '../NavBar/NavBar';
import CountryCard from './CountryCard';
import {Button} from '../../styles/Buttons/ButtonAct';
import {ConteinDiv} from '../../styles/Paginate/ContainerPagRef'


 function Home(){
  

     const allCountry= useSelector(state=> state.countries)
     const [currentPage, setCurrentPage]= useState(1);
     const [countryPerPage]= useState(10);
     const indexOfLastCountry= currentPage * countryPerPage;
     const indexOfFirstCountry= indexOfLastCountry- countryPerPage;
     const currentCountry =  allCountry.slice(indexOfFirstCountry, indexOfLastCountry)
     const [order,setOrder]= useState('');


     const pag=(pageNumber)=>{
        setCurrentPage(pageNumber)
        
    }

    function handleClick(e){
        e.preventDefault();
       dispatch(getAllCountries())

    }

    const dispatch= useDispatch()
    useEffect(()=>{
    dispatch(getAllCountries())
    
    },[])
    return (
        <div>
           
                <NavBar
              setOrder={setOrder}    
                />   
                <ConteinDiv>
                <Button onClick={(e)=>handleClick(e)}>Refresh</Button>        
               <Paginate
               countryPerPage={countryPerPage}
               allCountry={allCountry.length}
               pag={pag} />
               </ConteinDiv>
               
           <ContainerGrid className="contenedor">
                            <span>

            {currentCountry?.map((country)=>{
                return(
                    
                   <div>
                       <CountryCard
                    id={country.id}
                    name={country.name}
                    idL={country.idL}
                    flag={country.flag}
                    continent={country.continent}
                    capital={country.capital}
                    subregion={country.subregion}
                    area={country.area}
                    population={country.population}   />
                   </div>     
                )
            })}
              </span>
                     </ContainerGrid>
        </div>
    )
}

const mapStateToProps =state=>{
    return{
        countries: state.countries
    }
};


export default connect(mapStateToProps)(Home);