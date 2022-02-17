import styled from "styled-components";


export const NavContaier= styled.div`
border: 2px solid black;
padding: 10px;
background-color: #17171bdc;
position: relative;
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-evenly;
margin-bottom: 50px;

`



export const Select= styled.select`

background-color:#17171be1;
border-radius: 5px;
border: 2px solid rgba(161, 158, 158, 0.945);
color: white;
font-family: 'Saira', sans-serif;
position: relative;


&& option{
    aparence: none;
    background-color: #17171be1;
    color: white;
    

    
}


`