import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

const PokemonDetails = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemonDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchPokemonDetails();
  }, [name]);

  if (loading) {
    return <>Loading...</>;
  }

  if (!pokemonDetails.sprites) {
    return <>No data available.</>;
  }

  const frontDefault = pokemonDetails.sprites.front_default;

  console.log(pokemonDetails);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3} className="mb-4">
            <Card>
              {frontDefault && <Card.Img variant="top" src={frontDefault} />}
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text
                  style={{ marginBottom: 0 }}
                >{`Height: ${pokemonDetails.height}`}</Card.Text>
                <Card.Text
                  style={{ marginBottom: 0 }}
                >{`Weight: ${pokemonDetails.weight}`}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <p>Abilities:</p>
                <ul>
                  {pokemonDetails.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                  ))}
                </ul>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PokemonDetails;
