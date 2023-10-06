// Exposes the component making it available for use by other components, modules and files
import { useState, useEffect } from "react";
import { LoginView } from "../LoginView/LoginView";

import React from "react";

//imports the movie card component
import { MovieCard } from "../MovieCard/MovieCard";

//imports the movie view component
import { MovieView } from "../MovieView/MovieView";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [user, setUser] = useState(null);

  const [token, setToken] = useState(null);

  if (!user) {
    return (
      <LoginView
        onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}
      />
    );
  }

  useEffect(() => {
    fetch("https://bond-flix-9c1709905a90.herokuapp.com/movies")
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
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
