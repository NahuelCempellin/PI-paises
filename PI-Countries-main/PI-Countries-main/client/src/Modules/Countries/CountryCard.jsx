import React from "react";
import { ContainerCards } from "../../styles/CardStyles/CountryCards";
import { Link } from "react-router-dom";
import { Button } from "../../styles/Buttons/ButtonAct";



export default function CountryCard({id,name,idL,flag,continent,capital,subregion,area,population}){
    return(
        <div>
              <ContainerCards key={id}>
                    <div className="front">
                    <h2>{name}</h2>
                    <p>ID:{idL}</p>
                    <img src={flag}
                    alt=''/>
                    </div>
                    <div className="back">
                    <p>Continent: {continent}</p>
                    <p>Capital: {capital}</p>
                    <p>subregion: {subregion}</p>
                    <p>Area: {area} km²</p>
                    <p>Population: {population}</p>
                    <Link to={`/countries/${idL}`}>
                    <Button>Country Detail</Button>
                    </Link>
                    </div>
                     </ContainerCards>
        </div>
    )
}

 