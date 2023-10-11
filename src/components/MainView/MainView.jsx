// Exposes the component making it available for use by other components, modules and files
import { useState, useEffect } from "react";
import { LoginView } from "../LoginView/LoginView";
import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import { SignupView } from "../SignupView/SignupView";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://bond-flix-9c1709905a90.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("movies from api:", data);
        const moviesFromApi = data.map((movieData) => {
          return {
            id: movieData._id,
            title: movieData.Title,
            director: {
              name: movieData.Director.Name,
              bio: movieData.Director.Bio,
              dateOfBirth: movieData.Director["Date Of Birth"],
            },
            actor: {
              name: movieData.Actor.Name,
              bio: movieData.Actor.Bio,
              dateOfBirth: movieData.Actor["Date Of Birth"],
            },
            genre: movieData.Genre,
            description: movieData.Description,
            imageUrl: movieData.ImageURL,
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  return (
    <Row className="justify-content-md-center mainContainer">
      {!user ? (
        <>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />

          <SignupView />
        </>
      ) : selectedMovie ? (
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
      ) : movies.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        <>
          {movies.map((movie) => (
            <Col className="mb-5" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
        </>
      )}
      {user && !selectedMovie && (
        <Button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
          variant="primary"
        >
          Logout
        </Button>
      )}
    </Row>
  );
};
