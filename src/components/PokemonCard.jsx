import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function PokemonCard({ url, name }) {
  const [pokeImg, setPokeImg] = useState("");
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(url);
        const { sprites } = response.data;
        const pokemonAbilities = response.data.abilities;
        setAbilities(pokemonAbilities);
        setPokeImg(sprites.front_default);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  });

  return (
    <div>
      {pokeImg && (
        <>
          <Card>
            <Card.Img variant="top" src={pokeImg} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <p>Abilities:</p>
              <ul>
                {abilities.map((ability, index) => {
                  return <li key={index}>{ability.ability.name}</li>;
                })}
              </ul>
            </Card.Footer>
          </Card>
        </>
      )}
    </div>
  );
}

export { PokemonCard };
