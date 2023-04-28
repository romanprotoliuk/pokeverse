import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Pokemon {
  sprites: {
    front_default: string;
  };
  abilities: Ability[];
}

interface Props {
  url: string;
  name: string;
}

const PokemonCard: React.FC<Props> = ({ url, name }) => {
  const [pokeImg, setPokeImg] = useState("");
  const [abilities, setAbilities] = useState<Ability[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get<Pokemon>(url);
        const { sprites, abilities } = response.data;
        setAbilities(abilities);
        setPokeImg(sprites.front_default);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, [url]);

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
};

export { PokemonCard };
