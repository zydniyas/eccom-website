import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/user/LogIn";

function UserRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default UserRouter;
