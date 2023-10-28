import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function DirectorView({ movies }) {
  const { directorName } = useParams();
  const movie = movies.find((m) => m.director.name === directorName);
  console.log("Original Movies", movies);
  console.log("Movie: ", movie);
  console.log("Director Name: ", directorName);

  if (!movies.length) {
    return <Col md={9}>Loading...</Col>;
  }

  if (!movie) {
    return <Col md={9}>Director not found</Col>;
  }

  return (
    <Col md={9}>
      <div>
        <div className="directorImageContainer">
          <img
            src={movie.director.DirectorImage}
            className="w-100 directorImage"
            alt={movie.Title}
          />
        </div>
        <div className="contentContainer">
          <div className="DirectorViewText">
            <div>
              <span className="DirectorViewTitle">{movie.director.name}</span>
            </div>
          </div>
        </div>

        <div className="description">
          <span className="plot">Bio: </span>
          <span>{movie.director.bio}</span>
        </div>

        <div className="MovieViewButton">
          <Link to={"/"}>
            <Button variant="primary">Back</Button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default DirectorView;
