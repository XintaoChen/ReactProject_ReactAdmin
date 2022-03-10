// root component of app

import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./pages/RoutesList";

function App() {
  return (
    <BrowserRouter>
      <RoutesList></RoutesList>
    </BrowserRouter>
  );
}

export default App;
