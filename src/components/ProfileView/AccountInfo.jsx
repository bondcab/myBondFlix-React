import { Link } from "react-router-dom";

function AccountInfo(storedUser) {
  const username = storedUser.storedUser.Username;
  const email = storedUser.storedUser.Email;
  const birthday = storedUser.storedUser.DOB;
  const birthdayYear = birthday.slice(0, 4);
  const birthdayMonth = birthday.slice(5, 7);
  const birthdayDay = birthday.slice(8, 10);

  return (
    <div className="AccountInformation">
      <h1>Account Information</h1>
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
