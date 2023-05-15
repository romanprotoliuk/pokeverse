import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../components/Input";

import { PokemonCard } from "../components/PokemonCard";
import { useState, useEffect } from "react";

import axios from "axios";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(pokeApi);
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, []);

  const handleFilter = (searchTerm) => {
    const filteredResults = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filteredResults);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Input handleFilter={handleFilter} />
          </Col>
        </Row>
        <Row>
          {filteredPokemons.map((pokemon) => (
            <Col md={3} key={pokemon.url} className="mb-4">
              <PokemonCard url={pokemon.url} name={pokemon.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
