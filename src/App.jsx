import React, { Fragment } from "react";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";
import { useEffect, useState } from "react";
import axios from "axios";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(pokeApi);
        setPokemons(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, []);

  return (
    <div data-testid="app">
      <Navigation />

      <h1>Pokemon should appear here</h1>

      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} url={pokemon.url} name={pokemon.name} />
      ))}
    </div>
  );
};

export { App };
