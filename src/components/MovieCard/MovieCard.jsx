import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card className={styles.movieCard}>
        <Card.Img
          className={styles.imgMain}
          variant="top"
          src={movie.imageUrl2}
        />
        <Card.Body className={styles.textCentre}>
          <Card.Title className={styles.cardTitle}>{movie.title}</Card.Title>
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
