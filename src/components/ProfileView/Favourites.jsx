//Favourites Component
import React from "react";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../MovieCard/MovieCard";
import Row from "react-bootstrap/Row";

function Favourites({ movies, user, favouriteFilms }) {
  let favouriteFilmsArray = movies.filter((movie) =>
    favouriteFilms.includes(movie.id)
  );

  return (
    <Row>
      <div className="FavouritesHeading">
        <h1>Favourites</h1>
      </div>
      {favouriteFilmsArray.map((movie) => (
        <Col className="mb-5" key={movie.id} md={4}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default Favourites;
