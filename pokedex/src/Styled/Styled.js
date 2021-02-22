import styled from 'styled-components'

export const AppBarContainer = styled.div `
width: 97%;
height: 80px;
display: flex;
align-items: center;
border-radius:5px;
justify-content: space-between;
background-color: #8e0000;
position:relative;
padding-left: 20px;
padding-right: 20px;
top: 0;
left: 0;
z-index: 3;
box-shadow: 5px 8px 0px black;

  

`
export const Navbutton1 = styled.button`
padding: 10px;
background-color: #c62828;
color:#ffd700;
  border: none;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 5px 5px 0px black;
  cursor: pointer;
  outline: none;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  &:hover {
    transform: scale(1.1);

`
export const Pokedex  = styled.h1`
color:#ffd700;
text-shadow: 4px 4px blue; 


`

