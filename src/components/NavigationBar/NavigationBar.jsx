import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import { useState } from "react";

export const NavigationBar = ({ user, onLoggedOut }) => {
  const [menuOptions, setMenuOptions] = useState(false);

  function handleMenuClick() {
    setMenuOptions(true);
  }

  function menuOptionClick() {
    setMenuOptions(false);
  }

  return (
    <div>
      {menuOptions ? (
        <div className={styles.menuOptionsContainer}>
          <div className={styles.menuOptions}>
            <div className={styles.options}>
              <Nav.Link
                as={Link}
                to="/"
                className={styles.menuHomeLink}
                onClick={menuOptionClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/profile"
                className={styles.menuProfileLink}
                onClick={menuOptionClick}
              >
                Profile
              </Nav.Link>
              <Nav.Link onClick={onLoggedOut} className={styles.menuLogoutLink}>
                Logout
              </Nav.Link>
            </div>
          </div>
        </div>
      ) : null}

      <Navbar className={styles.navigationBar}>
        <Container className={styles.navigationBarContainer}>
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
                  <Nav.Link
                    as={Link}
                    to="/signup"
                    className={styles.signupLink}
                  >
                    Signup
                  </Nav.Link>
                </>
              )}
              {user && (
                <>
                  <Nav.Link as={Link} to="/" className={styles.homeLink}>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/profile"
                    className={styles.profileLink}
                  >
                    Profile
                  </Nav.Link>

                  <Nav.Link onClick={onLoggedOut} className={styles.logoutLink}>
                    Logout
                  </Nav.Link>
                  <div
                    className={styles.menuIcon}
                    onClick={handleMenuClick}
                  ></div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
