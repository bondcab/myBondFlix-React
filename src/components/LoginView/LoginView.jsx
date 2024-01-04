//LoginView component
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export const LoginView = ({ onLoggedIn, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://bond-flix-9c1709905a90.herokuapp.com/login", {
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
    <Col className="col-12">
      <div className="loginHeadingContainer">
        <h1>Login</h1>
      </div>

      <div className="loginForm">
        <img
          className="bondLogo"
          src="https://i.ebayimg.com/images/g/PEoAAOSwu75h9Et3/s-l1600.jpg"
          alt="Bond Logo"
        />

        <Form onSubmit={handleSubmit} className="loginFormInput">
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
          <Button variant="primary" type="submit" className="LoginButton">
            Submit
          </Button>
        </Form>
      </div>
    </Col>
  );
};
