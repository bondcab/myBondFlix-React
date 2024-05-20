import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./MovieCard.module.css";

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
        className={styles.movieCard}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Card.Img
          className={styles.imgMain}
          variant="top"
          src={movie.imageUrl2}
        />
        <Card.Body className={styles.textCentre}>
          <Card.Title
            className={styles.cardTitle}
            style={{ textDecoration: "none" }}
          >
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
