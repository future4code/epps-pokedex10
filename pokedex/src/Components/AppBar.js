import React from "react";
import { useHistory } from "react-router-dom";
import { goToListPage, goToPokedexPage } from "../Routes/Coordinator";
import { AppBarContainer } from "../Styled/Styled";


export default function AppBar() {
    const history = useHistory();

    return(
        <AppBarContainer>
            <button onClick={() => goToPokedexPage(history)}>Ir Para Pokedex</button>
            <h1>Pokedex</h1>
            <button onClick={() => goToListPage(history)}>Voltar para lista de Pokemons</button>
        </AppBarContainer>
        
    )
}