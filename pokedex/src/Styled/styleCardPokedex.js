import styled from 'styled-components'

export const NavCardpoke = styled.div`
display: inline-block;
background-color:#ffd349;
padding: 35px;
border: 5px solid black;
left: 2px;
position: relative;
margin: 0;
flex-direction: column;
padding-right: 27px;
padding-left: 5px;
margin: 50px 1px 20px 20px;
opacity: 80%;
overflow: hidden;
position: relative;
border-radius:5px ;
&:hover{
    opacity: 100%;
    box-shadow: 5px 8px 0px black;
        
`

export const NameCard = styled.h2`
position: absolute;
top: -20px;
left: 0px;
width: 95%;
height: 40px;
display: flex;
align-items: center;
justify-content: center ;
padding-left: 5px;
padding-right: 100%;
background-color: black;
color:white;
box-shadow: 0px 5px 5px rgba(255,255,255,0.2);
font-size: 24px;
`

export const PhotoCard = styled.img`
display: block;
margin-top: 2%;
margin-left: auto;
margin-right: auto;
width: 250px;
height: 250px;
border-bottom:  5px solid black; 

`
