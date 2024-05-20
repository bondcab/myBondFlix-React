import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar className={styles.navigationBar}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.appTitle}>
          James Bond Movies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navContainer}>
            {!user && (
              <>
                <Nav.Link as={Link} to="/login" className={styles.loginLink}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className={styles.signupLink}>
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>

                <Nav.Link onClick={onLoggedOut} className={styles.logoutLink}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
