//Signup View Component
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import styles from "./DeleteAccount.module.css";

function DeleteAccount({ onLoggedOut }) {
  const [username, setUsername] = useState("");

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const token = storedToken;

  const handleSubmit = (event) => {
    let confirm = prompt("Please type DELETE to confirm");

    event.preventDefault();

    if (username === storedUser.Username && confirm === "DELETE") {
      fetch(
        "http://load-balancer-01-1868401869.eu-central-1.elb.amazonaws.com:8080/users/" +
          storedUser.Username,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((response) => {
        if (response.ok) {
          alert("Account Deleted");
          window.location.reload();
          onLoggedOut();
        } else {
          alert("Account Deletion Failed");
        }
      });
    } else {
      alert("Something not right");
    }
  };

  return (
    <Col md={4} className={styles.deleteInfo}>
      <h1 className={deleteInfoHeading}>Delete Account</h1>
      <div className={styles.deleteFormParent}>
        <Form onSubmit={handleSubmit} className={styles.deleteForm}>
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

          <Form.Group className={styles.deleteButtonParent}>
            <Button
              className={styles.deleteUpdateButton}
              variant="primary"
              type="submit"
            >
              Delete
            </Button>
          </Form.Group>
          <Link to={"/profile/"} className={styles.deleteParent}>
            <p className={styles.deleteBack}>Go Back</p>
          </Link>
        </Form>
      </div>
    </Col>
  );
}

export default DeleteAccount;
