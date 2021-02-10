import React from "react";
import InfoPokemon from "./context/context";
import GlobalState from "./global/GlobalState";
import Router from "./Routes/Router";

export default function App() {
  const pokemon = {
    name: "",
    stats: [
      {
        base_stat: 45,
        stat: {
          name: "hp",
        },
      },
    ],
  };

  return (
    <GlobalState>
      {/* <InfoPokemon.Provider valeu={pokemon}> */}
        <Router />
      {/* </InfoPokemon.Provider> */}
    </GlobalState>
  );
}
