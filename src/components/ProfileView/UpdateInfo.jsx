//Signup View Component
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import styles from "./UpdateInfo.module.css";
import { API_URL } from "../../config";

function UpdateInfo({ changePic }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const storedUser = JSON.parse(localStorage.getItem("currentUsername"));
  const storedToken = localStorage.getItem("token");
  const [picClick, setPicClick] = useState(false);
  const [picChanged, setPicChanged] = useState(false);
  const [imageName, setImageName] = useState(false);
  const storagePic = localStorage.getItem("Image Name");

  useEffect(() => {
    if (storagePic !== null) {
      setPicChanged(true);
    }
  }, []);

  const token = storedToken;

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      DOB: birthday,
    };

    fetch(API_URL + "/users/" + storedUser, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        alert("Account Information updated");
        window.location.reload();
        localStorage.setItem("currentUsername", username);
      } else {
        alert("Account Information update failed");
      }
    });
  };

  function handlePicClick() {
    console.log("Change profile pic button clicked");
    setPicClick(true);
  }

  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    console.log("Selected file: ", selectedFile);
    setFile(selectedFile);
    localStorage.setItem("Image Name", selectedFile.name);
  }

  async function handlePicSubmit(event) {
    event.preventDefault();

    if (file !== null) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(API_URL + "/images", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }
        if (response.ok) {
          console.log("Image uploaded successfully");
          console.log("Response: ", response);
          setPicClick(false);
          setPicChanged(true);
          const picName = localStorage.getItem("Image Name");
          console.log("local storage pic name: ", picName);
          setImageName(picName);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("An error occurred: " + error.message);
      }
    }
  }

  ("/images/pic_placeholder.jpeg");

  return (
    <div className={styles.updateViewContainer}>
      <div>
        <div className={styles.updateInfoContainer}>
          <div className={styles.updateInfo}>
            <Col md={12} className={styles.UpdateInfo}>
              <h1 className={styles.UpdateInfoHeading}>
                Update Account Information
              </h1>
              {/* <div className={styles.profilePicContainer}>
                <img
                  alt="profilePicture"
                  src={
                    picChanged
                      ? `https://mybondflix-images.s3.eu-central-1.amazonaws.com/resized-images/${storagePic}`
                      : "/images/pic_placeholder.jpeg"
                  }
                  className={styles.profilePic}
                />
                <button
                  className={styles.profilePicButton}
                  onClick={handlePicClick}
                >
                  Change Pic
                </button>
              </div> */}
              <div className={styles.chooseFileContainer}>
                {picClick ? (
                  <div className={styles.choosePicContainer}>
                    <form onSubmit={handlePicSubmit}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <button type="submit">Upload</button>
                    </form>
                  </div>
                ) : null}
              </div>

              <div className={styles.UpdateFormParent}>
                <Form onSubmit={handleSubmit} className={styles.UpdateForm}>
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
                  <Form.Group className={styles.UpdateButtonParent}>
                    <Button
                      className={styles.AccountUpdateButton}
                      variant="primary"
                      type="submit"
                    >
                      Update
                    </Button>
                  </Form.Group>
                  <Link to={"/profile/"} className={styles.UpdateBackParent}>
                    <p className={styles.UpdateBack}>Go Back</p>
                  </Link>
                </Form>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateInfo;
