import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import UserProfile from "./components/user-profile";
import { LoginContext } from "./contexts/LoginContext";
function App() {
  const [username, setUsername] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider
        value={{ username, setUsername, showProfile, setShowProfile }}
      >
        {showProfile ? <UserProfile /> : <Login />}
      </LoginContext.Provider>
      
    </div>
  );
}

export default App;
