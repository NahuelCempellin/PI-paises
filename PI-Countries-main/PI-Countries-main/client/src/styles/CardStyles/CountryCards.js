import styled from "styled-components";


export const ContainerGrid = styled.div`
span{
display:grid;
grid-template-columns: repeat(3, 1fr);

grid-column-gap: 10px;
grid-row-gap: 20px;
justify-items: center;
}

`


export  const ContainerCards = styled.div`

box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.7);
margin:0;
max-width: 1200px;
background-color: #29292b;
width: 295px;
height:280px;
position: relative;
transform-style: preserve-3d;
perspective: 1000px;
transition: all 600ms;
border-radius: 10px;
border: 2px solid black;

} 

&&:hover{
    transform: rotateY(180deg);
}

.front, .back{
    width:100%;
    heigth:100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transform-style: preserve-3d;

}

.back{
    top: 10px;
    transform: rotateY(180deg);
    transform: trnaslateZ(60px)
}

.front{
    transform: trnaslateZ(60px)
    
}



.back p{
    top: 100px;
    display: flex;
    justify-content: center;
}




img{
    width: 200px;
    heigth: 100px;
    border-radius: 5px;
}

}

`

