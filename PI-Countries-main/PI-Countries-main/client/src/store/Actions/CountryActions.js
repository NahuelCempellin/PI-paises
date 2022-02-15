import axios from 'axios'
import {MAIN_URL ,GET_COUNTRIES, 
    FILTER_BY_CONTINENT,
    FILTER_BY_ALPH,
    COUNTRY_URL,
    FILTER_BY_SEARCH,
    FILTER_BY_POPULATION,
    TOURIST_URL,
    GET_DETAIL,
    GET_ID
    } from "../../Constants/Constants.js";



 export function getAllCountries() {
    return function (dispatch) {
        return fetch(MAIN_URL)
            .then(response => response.json())
            .then(res => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: res
                })

            })
    }
   
}

export function filterByPopulation(payload){
    return{
        type: FILTER_BY_POPULATION,
        payload
    }
}
 
export function filterByContinent(payload){
    return{
        type: FILTER_BY_CONTINENT,
        payload
    }
} 

export function filterByAlph(payload){
    return{
        type: FILTER_BY_ALPH,
        payload
    }
}

export function searchName(payload){
   
    return function (dispatch) {
        try{
            return fetch(COUNTRY_URL + payload)
            .then(response => response.json())
            .then(res => {
                dispatch({
                    type: FILTER_BY_SEARCH,
                    payload: res
                })
            
            })
        }catch(error){
            if (error.response){
                    alert(Error.response.data )
            }
        }       

}
}




export function postActivity (payload){
    return async function(){
        const response = await axios.post(TOURIST_URL,payload)
        console.log(response)
        return(response)
    }
}


export function getDetail(idL) {
    return function (dispatch) {
        return fetch(GET_ID+idL)
            .then(response => response.json())
            .then(res => {
                dispatch({
                    type: GET_DETAIL,
                    payload: res
                })

            })
    }
   
}