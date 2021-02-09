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
