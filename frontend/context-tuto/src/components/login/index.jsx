import React, { useState, useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
export default function Login() {
  const { username, setUsername, setShowProfile } = useContext(LoginContext);
  const [password, setPassword] = useState(null);
  const handleLogin = () => {
    if (username === "a@a.com" && password === "123") {
      setShowProfile(true);
    } else {
      alert("incorrect username or password");
    }
  };
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="form">
        <div className="form-group">
          <label>username</label> <br />
          <input
            type="text"
            placeholder="enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>password</label> <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
          />
        </div>
        <div className="form-group">
          <button onClick={handleLogin}>login</button>
        </div>
      </div>
    </div>
  );
}
