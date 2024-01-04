//Signup View Component
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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
        "https://bond-flix-9c1709905a90.herokuapp.com/users/" +
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
    <Col md={4} className="UpdateInfo">
      <h1 className="UpdateInfoHeading">Delete Account</h1>
      <div className="UpdateFormParent">
        <Form onSubmit={handleSubmit} className="UpdateForm">
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

          <Form.Group className="UpdateButtonParent">
            <Button
              className="AccountUpdateButton"
              variant="primary"
              type="submit"
            >
              Delete
            </Button>
          </Form.Group>
          <Link to={"/profile/"} className="UpdateBackParent">
            <p className="UpdateBack">Go Back</p>
          </Link>
        </Form>
      </div>
    </Col>
  );
}

export default DeleteAccount;
