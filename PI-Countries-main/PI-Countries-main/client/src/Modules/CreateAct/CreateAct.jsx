import React from "react";
import { Link } from "react-router-dom";
import { P} from "../../styles/NavBar/ConteinerCreate";

export default function CreateActivity(){
    return(
        <div>
            
            <Link to='/Form'>
            <P>CREATE A TOURIST ACTIVITY</P>
            </Link>
            
        </div>
    )
} 