import styled from 'styled-components'


export const Navstyle = styled.div`

display: inline-block;
background-color: #ffd349;
padding: 35px;
border: 5px solid black;
left: 2px;
position: relative;
margin: 0;
flex-direction: column;
padding-right: 27px;
padding-left: 27px;
margin: 50px 1px 20px 20px;
opacity: 80%;
overflow: hidden;
position: relative;
border-radius:5px ;
&:hover{
    opacity: 100%;
    box-shadow: 5px 8px 0px black;
        
  
`
export const Name = styled.h2`
color: white;
    text-align: center;
    text-transform: uppercase;
    padding-top:10px;

    
`
export const Navimg = styled.img`
display: block;
margin-top: 2%;
margin-left: auto;
margin-right: auto;
width: 250px;
height: 250px;
border-bottom:  5px solid black; 
   
    
`

export const Title = styled.h2`
position: absolute;
top: -20px;
left: 0px;
width: 95%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
padding-left: 5px;
padding-right: 20px;
background-color: black;
box-shadow: 0px 5px 5px rgba(255,255,255,0.2);
font-size: 14px;
`


export const Navbutton = styled.button`
padding: 10px;
 background-color: #c62828;
float: center;
text-align: center;
color: white;
border: none;
border-radius: 8px;
margin: 10px;
margin-top: 10%;
margin-bottom: 3%;
padding-right:35px;
box-shadow: 5px 5px 0px black;
cursor: pointer;
outline: none;
transition: all 400ms ease-in-out;
&:hover {
    transform: scale(1.1);

  
`