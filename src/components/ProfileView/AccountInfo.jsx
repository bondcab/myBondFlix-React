import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AccountInfo(storedUser) {
  const username = storedUser.storedUser.Username;
  const email = storedUser.storedUser.Email;
  const birthday = storedUser.storedUser.DOB;
  const birthdayYear = birthday.slice(0, 4);
  const birthdayMonth = birthday.slice(5, 7);
  const birthdayDay = birthday.slice(8, 10);
  const [profilePic, setProfilePic] = useState(false);
  const storagePic = localStorage.getItem("Image Name");

  useEffect(() => {
    if (storagePic !== null) {
      setProfilePic(true);
    }
  }, []);

  return (
    <div className="AccountInformation">
      <h1 className="accountInfoHeading">Account Information</h1>
      <img
        alt="profilePicture"
        src={
          !profilePic
            ? "/images/pic_placeholder.jpeg"
            : `https://mybondflix-images.s3.eu-central-1.amazonaws.com/resized-images/${storagePic}`
        }
        className="profilePic"
      />
      <p>Username: {username}</p>
      <p>Email: {email} </p>
      <p>Birthday: {`${birthdayDay}/${birthdayMonth}/${birthdayYear}`}</p>
      <br />
      <br />
      <Link to={"/profile/updateinfo"} className="UpdateLink">
        <p className="UpdateInformationLink">Update Information</p>
      </Link>
      <Link to={"/profile/delete"} className="DeleteLink">
        <p className="DeleteAccount">Delete Account</p>
      </Link>
    </div>
  );
}

export default AccountInfo;
