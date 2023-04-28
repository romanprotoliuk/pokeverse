import React from "react";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import axios from "axios";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Array<any>>([]);

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

  const handleFilter = (searchTerm: string) => {
    const filteredResults = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filteredResults);
  };

  return (
    <div data-testid="app">
      <Navigation />
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
    </div>
  );
};

export { App};
