import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  AppBar  from "../Components/AppBar";
import  Pokedex  from "../Pages/Pokedex/Pokedex";
import  PokemonsDetails  from "../Pages/PokemonsDetails/PokemonsDetails";
import  PokemonsList from "../Pages/PokemonsList/PokemonsList";

export default function Router() {
    return (
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route exact path='/'>
            <PokemonsList />
            </Route>
            <Route exact path='/poke-detail/:id'>
               <PokemonsDetails /> 
            </Route>
            <Route exact path='/pokedex'>
               <Pokedex /> 
            </Route>
          </Switch>
        </BrowserRouter>
    );
  }

 