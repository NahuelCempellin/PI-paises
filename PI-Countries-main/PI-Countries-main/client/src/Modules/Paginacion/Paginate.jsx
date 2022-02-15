import React from "react";
import { PagButton } from "../../styles/Paginate/Paginate";

export default function Paginate({countryPerPage, allCountry, pag}){
    const pageNumbers=[]

    for(let i=1; i<=Math.ceil(allCountry/countryPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="paginate">
                {pageNumbers &&
                pageNumbers.map(number=>
                
                <PagButton onClick={()=>pag(number)}>{number}</PagButton>
                )}
            </ul>
        </nav>
    )
}