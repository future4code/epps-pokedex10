import React from "react";
import GlobalState from "./global/GlobalState";
import Router from "./Routes/Router";

export default function App() {

  return (
    <GlobalState>
      
        <Router />
     
    </GlobalState>
  );
}
