// Exposes the component making it available for use by other components, modules and files
import { useState, useEffect } from "react";
import { LoginView } from "../ProfileView/LoginView";
import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { MovieView } from "../MovieView/MovieView";
import { SignupView } from "../SignUpView/SignupView";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import ProfileView from "../ProfileView/ProfileView";
import UpdateInfo from "../ProfileView/UpdateInfo";
import DeleteAccount from "../ProfileView/DeleteAccount";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [favouriteFilms, setFavouriteFilms] = useState(
    storedUser ? storedUser.FavouriteFilms : []
  );

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://bond-flix-9c1709905a90.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        let dataReordered = data.sort(
          (a, b) => a.YearReleased - b.YearReleased
        );
        const moviesFromApi = dataReordered.map((movieData) => {
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
            imageUrl2: movieData.ImageURL2,
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row className="mainContainer centre">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" />
                ) : (
                  <Col md={12}>
                    <ProfileView
                      movies={movies}
                      storedUser={storedUser}
                      user={user}
                      favouriteFilms={favouriteFilms}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col> The list is empty!</Col>
                ) : (
                  <Col md={8} className="centre">
                    <MovieView
                      movies={movies}
                      storedUser={storedUser}
                      user={user}
                      token={token}
                      favouriteFilms={favouriteFilms}
                      setFavouriteFilms={setFavouriteFilms}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/favourites/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col> The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView
                      movies={movies}
                      favouriteFilms={favouriteFilms}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie.id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />

          <Route
            path="/profile/updateinfo"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <>
                    <Col md={6}>
                      <UpdateInfo />
                    </Col>
                  </>
                )}
              </>
            }
          />

          <Route
            path="/profile/delete"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <>
                    <Col md={6}>
                      <DeleteAccount
                        onLoggedOut={() => {
                          setUser(null);
                          setToken(null);
                          localStorage.clear();
                        }}
                      />
                    </Col>
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
