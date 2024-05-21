import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./ActorView.module.css";

function ActorView({ movies }) {
  const { actorName } = useParams();
  const movie = movies.find((m) => m.actor.name === actorName);

  if (!movies.length) {
    return <Col md={9}>Loading...</Col>;
  }

  if (!movie) {
    return <Col md={9}>Actor not found</Col>;
  }

  const imageStyle = {
    backgroundImage: `url(${movie.actor.ActorImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  };

  return (
    <div>
      <div className={styles.actorViewContainer}>
        <div className={styles.actorView}>
          <Col md={12}>
            <div>
              <div>
                <div className={styles.image} style={imageStyle}></div>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.actorTextContainer}>
                  <div className={styles.actorViewText}>
                    <div>
                      <span className={styles.actorViewTitle}>
                        {movie.actor.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <span className={styles.plot}>Bio: </span>
                <span>{movie.actor.bio}</span>
              </div>

              <div className={styles.actorViewButton}>
                <Link to={"/"}>
                  <Button variant="primary">Back</Button>
                </Link>
              </div>
            </div>
          </Col>
        </div>
      </div>
      <div className={styles.lowerSection}></div>
    </div>
  );

  return (
    <Col md={9}>
      <div>
        <div>
          <img
            src={movie.actor.ActorImage}
            className={styles.actorImage}
            alt={movie.Title}
          />
        </div>
        <div>
          <div className={styles.actorViewText}>
            <div>
              <span className={styles.actorViewTitle}>{movie.actor.name}</span>
            </div>
          </div>
        </div>

        <div>
          <span>Bio: </span>
          <span>{movie.actor.bio}</span>
        </div>

        <div className={styles.actorViewButton}>
          <Link to={"/"}>
            <Button variant="primary">Back</Button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default ActorView;
