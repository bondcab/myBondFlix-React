import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Col md={8}>
      <div>
        <div>
          <img src={movie.imageUrl} className="w-100" alt={movie.Title} />
        </div>
        <div className="MovieViewText">
          <div>
            <span>Title: </span>
            <span>{movie.title}</span>
          </div>
          <div>
            <span>Director: </span>
            <span>{movie.director.name}</span>
          </div>
        </div>

        <div className="MovieViewButton">
          <Button onClick={onBackClick} variant="primary">
            Back
          </Button>
        </div>
      </div>
    </Col>
  );
};
