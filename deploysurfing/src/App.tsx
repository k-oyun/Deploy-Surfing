import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import AddApp from "./Routes/AddApp";
import MyPage from "./Routes/MyPage";
import Main from "./Routes/Main";
import Register from "./Routes/Register";
import PasswordReset from "./Routes/PasswordReset";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={AddApp} path="/addApp" />
        <Route Component={Home} path="/home" />
        <Route Component={Main} path="/main" />
        <Route Component={MyPage} path="/myPage" />
        <Route Component={Register} path="/register" />
        <Route Component={PasswordReset} path="/passwordreset" />
      </Routes>
    </Router>
  );
}

export default App;
