import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AccountInfo.module.css";
import { API_URL } from "../../config";

function AccountInfo(storedUser) {
  // const username = storedUser.storedUser.Username;
  // const email = storedUser.storedUser.Email;
  // const birthday = storedUser.storedUser.DOB;
  // const birthdayYear = birthday.slice(0, 4);
  // const birthdayMonth = birthday.slice(5, 7);
  // const birthdayDay = birthday.slice(8, 10);
  const storedUsername = JSON.parse(localStorage.getItem("currentUsername"));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  let birthdayStorage = storedUser.storedUser.DOB;
  const [birthday, setBirthday] = useState(birthdayStorage);
  const birthdayYear = birthday.slice(0, 4);
  const birthdayMonth = birthday.slice(5, 7);
  const birthdayDay = birthday.slice(8, 10);
  const [profilePic, setProfilePic] = useState(false);
  const storagePic = localStorage.getItem("Image Name");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // if (storagePic !== null) {
    //   setProfilePic(true);
    // }

    console.log("Stored username: ", storedUsername);

    fetch(API_URL + `/users/${storedUsername}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data
        console.log("Fetched data from account info mount", data); // Add your logic here
        setUsername(data.Username);
        setEmail(data.Email);
        setBirthday(data.DOB);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.accountInfoContainer}>
      <div className={styles.accountInfo}>
        <h1 className={styles.accountInfoHeading}>Account Information</h1>
        {/* <img
          alt="profilePicture"
          src={
            !profilePic
              ? "/images/pic_placeholder.jpeg"
              : `https://mybondflix-images.s3.eu-central-1.amazonaws.com/resized-images/${storagePic}`
          }
          className={styles.profilePic}
        /> */}
        <p>
          Username: <span className={styles.bold}>{username}</span>
        </p>
        <p>
          Email: <span className={styles.bold}>{email} </span>
        </p>
        <p>
          Birthday:{" "}
          <span
            className={styles.bold}
          >{`${birthdayDay}/${birthdayMonth}/${birthdayYear}`}</span>
        </p>
        <br />
        <br />
        {/* <Link to={"/profile/updateinfo"} className={styles.UpdateLink}>
          <p className={styles.UpdateInformationLink}>Update Information</p>
        </Link> */}
        <Link to={"/profile/delete"} className={styles.DeleteLink}>
          <p className={styles.DeleteAccount}>Delete Account</p>
        </Link>
      </div>
    </div>
  );
}

export default AccountInfo;
