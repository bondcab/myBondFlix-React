import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./DirectorView.module.css";

function DirectorView({ movies }) {
  const { directorName } = useParams();
  const movie = movies.find((m) => m.director.name === directorName);

  if (!movies.length) {
    return <Col md={9}>Loading...</Col>;
  }

  if (!movie) {
    return <Col md={9}>Director not found</Col>;
  }

  return (
    <Col md={9}>
      <div>
        <div>
          <img
            src={movie.director.DirectorImage}
            className={styles.directorImage}
            alt={movie.Title}
          />
        </div>
        <div>
          <div className={styles.directorViewText}>
            <div>
              <span className={styles.directorViewTitle}>
                {movie.director.name}
              </span>
            </div>
          </div>
        </div>

        <div>
          <span>Bio: </span>
          <span>{movie.director.bio}</span>
        </div>

        <div className={styles.directorViewButton}>
          <Link to={"/"}>
            <Button variant="primary">Back</Button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default DirectorView;
