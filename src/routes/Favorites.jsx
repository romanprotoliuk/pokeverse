import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FavoritesContext } from "../context/FavoritesProvider";
import { PokemonCard } from "../components/PokemonCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <h1>Hello from favorites</h1>
      <Container>
        <Row>
          {favorites.map((favorite) => (
            <Col key={favorite.name} xs={12} md={6} lg={4}>
              <PokemonCard name={favorite.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Favorites;
