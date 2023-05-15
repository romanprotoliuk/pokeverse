import React from "react";
import { Navigation } from "./components/Navigation";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetails from "./routes/PokemonDetails";

const App = () => {
  return (
    <div data-testid="app">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export { App };
