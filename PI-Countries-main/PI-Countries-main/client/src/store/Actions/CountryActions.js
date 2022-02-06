import { MAIN_URL } from "../../Constants/Constants";
import { GET_COUNTRIES } from "../../Constants/Constants";



 export default function getAllCountries() {
    return function (dispatch) {
        return fetch(MAIN_URL)
            .then(response => response.json())
            .then(res => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: res.dbInfo
                })

            })
    }
}

