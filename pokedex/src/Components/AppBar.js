import React from "react";
import { useHistory } from "react-router-dom";
import { goToListPage, goToPokedexPage } from "../Routes/Coordinator";
import { AppBarContainer,Navbutton1,Pokedex} from "../Styled/Styled";



export default function AppBar() {
    const history = useHistory();

    return(
        <AppBarContainer>
        
            <Navbutton1 onClick={() => goToPokedexPage(history)}>Ir Para Pokedex</Navbutton1>
            <Pokedex>Pokédex</Pokedex>
            <Navbutton1 onClick={() => goToListPage(history)}>Voltar para lista de Pokemons</Navbutton1>
           
        </AppBarContainer>
        
    )
}