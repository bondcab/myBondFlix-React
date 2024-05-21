// Exposes the component making it available for use by other components, modules and files
import { useState, useEffect } from "react";
import { LoginView } from "../LoginView/LoginView";
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
import DirectorView from "../DirectorView/DirectorView";
import ActorView from "../ActorView/ActorView";
import styles from "./MainView.module.css";
import { API_URL } from "../../config";
import LandingPageImage from "./LandingPageImage";
import "../../../src/";
import { Container } from "react-bootstrap";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [favouriteFilms, setFavouriteFilms] = useState(
    storedUser ? storedUser.FavouriteFilms : []
  );
  let letters = "";
  const [originalMovies, setOriginalMovies] = useState([]);
  let titles = originalMovies.map((film) => film.title);
  const [search, setSearch] = useState("");

  let filteredMovies = [];

  const handleChange = (event) => {
    letters = event.target.value.toLowerCase();

    setSearch(letters);

    filteredMovies = titles.filter(function (film) {
      let titleSlice = film.slice(0, letters.length).toLowerCase();
      return titleSlice === letters;
    });

    setMovies(
      originalMovies.filter((movie) => filteredMovies.includes(movie.title))
    );
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(API_URL + "/movies", {
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
              DirectorImage: movieData.Director.DirectorImage,
            },
            actor: {
              name: movieData.Actor.Name,
              bio: movieData.Actor.Bio,
              dateOfBirth: movieData.Actor["Date Of Birth"],
              ActorImage: movieData.Actor.ActorImage,
            },
            genre: movieData.Genre,
            description: movieData.Description,
            imageUrl: movieData.ImageURL,
            imageUrl2: movieData.ImageURL2,
          };
        });

        setMovies(moviesFromApi);
        setOriginalMovies(moviesFromApi);
      });
  }, [token]);

  const [defaultPic, setDefaultPic] = useState(true);

  const [changePic, setChangePic] = useState(false);

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

      {!user ? <LandingPageImage /> : null}

      <Routes>
        <Route
          path="/login"
          element={
            <>
              {user ? (
                <Navigate to="/" />
              ) : (
                <Col className="col-12">
                  <LoginView
                    onLoggedIn={(user, token) => {
                      setUser(user);
                      setToken(token);
                    }}
                    user={user}
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
                <Col md={12}>
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
                  <MovieView movies={movies} favouriteFilms={favouriteFilms} />
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
              ) : (
                <>
                  <Container className={styles.moviesContainer}>
                    <Row className={styles.mainContainer}>
                      <div className={styles.searchParent}>
                        <input
                          type="text"
                          placeholder=" Search"
                          className={styles.searchBar}
                          onChange={handleChange}
                          value={search}
                        />
                      </div>

                      {movies.map((movie) => (
                        <Col className="mb-4" key={movie.id} md={3}>
                          <MovieCard movie={movie} />
                        </Col>
                      ))}
                    </Row>
                  </Container>
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
                    <UpdateInfo changePic={changePic} />
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

        <Route
          path="/director/:directorName"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : (
                <>
                  {movies.length > 0 ? (
                    <Col md={6}>
                      <DirectorView movies={movies} />
                    </Col>
                  ) : (
                    <Col> Loading...</Col>
                  )}
                </>
              )}
            </>
          }
        />
        <Route
          path="/actor/:actorName"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : (
                <>
                  {movies.length > 0 ? (
                    <Col md={6}>
                      <ActorView movies={movies} />
                    </Col>
                  ) : (
                    <Col> Loading...</Col>
                  )}
                </>
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
