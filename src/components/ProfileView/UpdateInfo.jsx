//Signup View Component
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function UpdateInfo() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const token = storedToken;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      DOB: birthday,
    };

    fetch(
      "http://load-balancer-01-1868401869.eu-central-1.elb.amazonaws.com:8080/users/" +
        storedUser.Username,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        alert("Account Information updated");
        window.location.reload();
      } else {
        alert("Account Information update failed");
      }
    });
  };

  return (
    <Col md={4} className="UpdateInfo">
      <h1 className="UpdateInfoHeading">Update Account Information</h1>
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
          <Form.Group className="UpdateButtonParent">
            <Button
              className="AccountUpdateButton"
              variant="primary"
              type="submit"
            >
              Update
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

export default UpdateInfo;
