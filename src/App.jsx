import React from "react";
import { Navigation } from "./components/Navigation";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetails from "./routes/PokemonDetails";
import { FavoritesProvider } from "./context/FavoritesProvider";
import Favorites from "./routes/Favorites";

const App = () => {
  return (
    <div data-testid="app">
      <Navigation />
      <FavoritesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </div>
  );
};

export { App };
