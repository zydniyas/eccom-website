import TopBar from "./components/user/TopBar";
import "../src/scss/style.scss";
import "../src/scss/landing_page.scss";
import LogIn from "./pages/user/LogIn";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { authToken } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid username or password");
        } else {
          console.log(res);
          console.log(authToken);
        }
        return res.json();
      })
      .then((data) => {
        // Assuming the response contains a 'token' property
        let authToken = data.token;
        setToken(authToken);
        // You can also store the token in localStorage for persistent login
        localStorage.setItem("token", authToken);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error:", error);
      });
  };
  const handleLogOut = () => {
    // e.preventDefault();
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <TopBar token={token} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path="/login"
          element={
            <LogIn
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              error={error}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
