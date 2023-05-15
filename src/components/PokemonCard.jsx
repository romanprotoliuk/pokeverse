import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FavoritesContext } from "../context/FavoritesProvider";

const PokemonCard = ({ url, name }) => {
  const [pokeImg, setPokeImg] = useState("");
  const [abil, setAbilities] = useState([]);

  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(url);
        const { sprites, abilities } = response.data;
        setAbilities(abilities);
        setPokeImg(sprites.front_default);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, [url]);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    addFavorite(name);
  };

  return (
    <div>
      {pokeImg && (
        <Link to={`/pokemon/${name}`}>
          <Card>
            <Card.Img variant="top" src={pokeImg} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <p>Abilities:</p>
              <ul>
                {abil.map((ability, index) => {
                  return <li key={index}>{ability.ability.name}</li>;
                })}
              </ul>
            </Card.Footer>
            <Button variant="primary" onClick={handleButtonClick}>
              Add to Favorites
            </Button>
          </Card>
        </Link>
      )}
    </div>
  );
};

export { PokemonCard };
