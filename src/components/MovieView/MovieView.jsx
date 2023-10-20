import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

export const MovieView = ({
  movies,
  storedUser,
  token,
  favouriteFilms,
  setFavouriteFilms,
}) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);
  const username = storedUser.Username;
  const [isFavourited, setIsFavourited] = useState(false);
  let [favouriteIconColour, setIconColour] = useState("lightgrey");
  let movieID = encodeURIComponent(movie.id);
  let url =
    "https://bond-flix-9c1709905a90.herokuapp.com/users/" +
    username +
    "/movies/" +
    movieID;

  console.log(storedUser);

  if (favouriteFilms.includes(movieID)) {
    favouriteIconColour = "#132043";
  }

  //If mouse is over the icon it will change colour
  function mouseOver() {
    setIconColour("#132043");
  }

  //Once mouse goes off the icon it will change back to default colour unless the movie has been favourited
  function mouseOut() {
    if (isFavourited === false) {
      setIconColour("lightgrey");
    }
  }

  //Function triggered by user clicking like icon. Will send post request to url and add to users favourites and will change the icon symbol colour
  function filmFavourited() {
    if (!favouriteFilms.includes(movieID)) {
      setFavouriteFilms((prevItems) => {
        return [...prevItems, movieID];
      });
      fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        method: "POST",
      });
      setIsFavourited(true);
    } else {
      setFavouriteFilms(favouriteFilms.filter((a) => a !== movieID));
      setIsFavourited(false);
      fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        method: "DELETE",
      });
    }
  }

  console.log(favouriteIconColour);

  return (
    <Col md={9}>
      <div>
        <div>
          <img src={movie.imageUrl} className="w-100" alt={movie.Title} />
        </div>
        <div className="contentContainer">
          <div className="favouriteIcon">
            <svg
              onClick={filmFavourited}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill={favouriteIconColour}
              class="bi"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </div>

          <div className="MovieViewText">
            <div>
              <span className="MovieViewTitle">{movie.title}</span>
            </div>
            <div>
              <span>Director: </span>
              <span>{movie.director.name}</span>
            </div>
          </div>
        </div>

        <div className="description">
          <span className="plot">Plot: </span>
          <span>{movie.description}</span>
        </div>

        <div className="MovieViewButton">
          <Link to={"/"}>
            <Button variant="primary">Back</Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};
