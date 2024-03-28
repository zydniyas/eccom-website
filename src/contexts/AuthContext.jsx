import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  const setToken = (token) => {
    setAuthToken(token);
    localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
