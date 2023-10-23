import Favourites from "./Favourites";
import Container from "react-bootstrap/Container";
import AccountInfo from "./AccountInfo";

function ProfileView({ movies, storedUser, user, favouriteFilms }) {
  return (
    <Container>
      <AccountInfo storedUser={storedUser} user={user} />
      <Favourites movies={movies} user={user} favouriteFilms={favouriteFilms} />
    </Container>
  );
}

export default ProfileView;
