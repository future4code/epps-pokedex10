import styled from 'styled-components'

export const Navimg = styled.img`
height: 180px;
    width: 180px; 
    z-index : 3;
    cursor: pointer;
    margin: 30px 30px 30px 30px
   
    
`
export const Navstyle = styled.div`

display: inline-block;
background-color: orange;
flex-direction: column;
padding-right: 27px;
padding-left: 0px;
    align-items: center;
    justify-content: center;
    margin: 5px;
    opacity: 80%;
    overflow: hidden;
    position: relative;
    border-radius:5px ;
    height: 300px;
    width: 300px;
    &:hover{
        opacity: 100%;
        box-shadow: 5px 8px 0px black;
  
`
export const Name = styled.h2`
color: white;
    text-align: center;
    text-transform: capitalize;
    padding-top:10px;
    
`

export const Title = styled.div`
position: absolute;
top: 0px;
left: 0px;
width: 95%;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 5px;
padding-right: 20px;
background-color: black;
box-shadow: 0px 5px 5px rgba(255,255,255,0.2);
font-size: 14px;
`


export const Navbutton = styled.button`
padding: 10px;
background-color: red;
float: center;

  border: none;
  border-radius: 8px;
  margin: 10px;
  padding-right:35px;
  box-shadow: 5px 5px 0px black;
  cursor: pointer;
  outline: none;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  
`