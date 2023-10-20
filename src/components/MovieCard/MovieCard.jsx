import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card className="h-100">
        <Card.Img className="imgMain" variant="top" src={movie.imageUrl2} />
        <Card.Body className="textCentre">
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imageUrl2: PropTypes.string.isRequired,
    // genre: PropTypes.string.isRequired,
  }).isRequired,
};
