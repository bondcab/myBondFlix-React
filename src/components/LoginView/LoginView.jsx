//LoginView component
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./LoginView.module.css";
import GoogleLinkButton from "./GoogleLinkButton";
import { API_URL } from "../../config";

export const LoginView = ({ onLoggedIn, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "currentUsername",
            JSON.stringify(data.user.Username)
          );
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        console.error("Error:", e);
        alert("An error occurred: " + e.message);
      });
  };

  return (
    <div className={styles.loginViewContainer}>
      <div className={styles.loginSection}>
        <div className={styles.loginHeadingContainer}>
          <h1 className={styles.loginHeading}>Login</h1>
        </div>

        <div className={styles.loginForm}>
          <img
            className={styles.bondLogo}
            src="https://i.ebayimg.com/images/g/PEoAAOSwu75h9Et3/s-l1600.jpg"
            alt="Bond Logo"
          />

          <Form onSubmit={handleSubmit} className={styles.loginFormInput}>
            {/* <GoogleLinkButton /> */}
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="3"
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className={styles.LoginButton}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
