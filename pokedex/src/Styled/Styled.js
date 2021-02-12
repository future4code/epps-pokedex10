import styled from 'styled-components'

export const AppBarContainer = styled.div `
border-bottom: 3px solid #FFFFFF;
  height: 80px;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  

`
export const Navbutton = styled.button`
max-width: 200px; 
  max-height: 50px;
  background-color: #313131;
  color: #f2f2f2;
  font-weight: bold;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  
`
export const Pokedex  = styled.h1`
color:#ffd700;
text-shadow: 4px 4px blue; 
`

export const Navimg = styled.img`
height: 150px;
    width: 150px; 
    z-index : 3;
    cursor: pointer;
    
`
export const Navstyle = styled.div`

display: flex;
flex-direction: column  ;
flex-wrap:  wrap;
background:grey;
height: 300px;
width: 350px;
box-shadow: 2px 2px 2px 2px ;
align-items: center;
justify-content: center;
overflow: hidden;
position: relative;
border-radius:10px ;
&:hover{
background-color: #c3aa5b;
}

`
export const Name = styled.h2`
color: white;
    text-align: center;
    text-transform: capitalize;
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
