import React from "react";
import { useHistory } from "react-router-dom";
import { goToListPage, goToPokedexPage } from "../Routes/Coordinator";
import { AppBarContainer,Navbutton,} from "../Styled/Styled";


export default function AppBar() {
    const history = useHistory();

    return(
        <AppBarContainer>
            <Navbutton onClick={() => goToPokedexPage(history)}>Ir Para Pokedex</Navbutton>
            <h1>Pokedex</h1>
            <Navbutton onClick={() => goToListPage(history)}>Voltar para lista de Pokemons</Navbutton>
        </AppBarContainer>
        
    )
}