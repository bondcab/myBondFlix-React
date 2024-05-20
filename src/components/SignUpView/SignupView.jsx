//Signup View Component
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import styles from "./SignupView.module.css";
import { API_URL } from "../../config";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      DOB: birthday,
    };

    fetch(API_URL + "/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <div className={styles.signupViewContainer}>
      <div className={styles.signupSection}>
        <div className={styles.signupHeadingContainer}>
          <h1>Signup</h1>
        </div>
        <div className={styles.signupForm}>
          <img
            className={styles.bondLogo}
            src="https://i.ebayimg.com/images/g/PEoAAOSwu75h9Et3/s-l1600.jpg"
            alt="Bond Logo"
          />
          <Form onSubmit={handleSubmit} className={styles.signupFormInput}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength="3"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className={styles.signupButton}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
