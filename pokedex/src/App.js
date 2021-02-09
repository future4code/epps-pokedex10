import React from "react";
import InfoPokemon from "./context/context";
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
    <div>
      <InfoPokemon.Provider valeu={pokemon}>
        <Router />
      </InfoPokemon.Provider>
    </div>
  );
}
