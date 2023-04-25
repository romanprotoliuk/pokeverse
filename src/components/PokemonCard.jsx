import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function PokemonCard({ url, name }) {
  const [pokeImg, setPokeImg] = useState("");
  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(url);
        const { sprites } = response.data;
        setPokeImg(sprites.front_default);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, []);

  return (
    <div>
      {pokeImg && <img src={pokeImg} alt={url} style={{ width: "100px" }} />}
      <p>{name}</p>
    </div>
  );
}

export { PokemonCard };
