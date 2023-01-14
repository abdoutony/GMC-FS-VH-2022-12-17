import React, { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
const UserProfile = () => {
  const { username, setShowProfile } = useContext(LoginContext);
  return (
    <div>
      user profile
      <h2>{username}</h2>
      <button onClick={() => setShowProfile(false)}>logout</button>
    </div>
  );
};

export default UserProfile;
