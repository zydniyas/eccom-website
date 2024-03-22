import TopBar from "./components/user/TopBar";
import "../src/scss/style.scss";
import "../src/scss/landing_page.scss";
import LogIn from "./pages/user/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = () => {
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
                }
                return res.json();
            })
            .then((data) => {
                // Assuming the response contains a 'token' property
                const authToken = data.token;
                setToken(authToken);
                // You can also store the token in localStorage for persistent login
                localStorage.setItem("token", authToken);
            })
            .catch((error) => {
                setError(error.message);
                console.error("Error:", error);
            });
    };

    return (
        <>
            <TopBar />
            <BrowserRouter>
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
            </BrowserRouter>
        </>
    );
}

export default App;
