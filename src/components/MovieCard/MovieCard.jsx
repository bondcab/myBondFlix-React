import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card
        className="h-100 movieCard"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Card.Img className="imgMain" variant="top" src={movie.imageUrl2} />
        <Card.Body className="h-100 textCentre">
          <Card.Title className="cardTitle" style={{ textDecoration: "none" }}>
            {movie.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imageUrl2: PropTypes.string.isRequired,
  }).isRequired,
};
