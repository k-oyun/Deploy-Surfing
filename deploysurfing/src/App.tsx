import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyApp from "./Routes/MyApp.tsx";
import Login from "./Routes/Login.tsx";
import New from "./Routes/New.tsx";
import Home from "./Routes/Home.tsx";
import AddApp from "./Routes/AddApp.tsx";
import MyPage from "./Routes/MyPage.tsx";
import Main from "./Routes/Main.tsx";
import Register from "./Routes/Register.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={MyApp} path="/myApp" />
        <Route Component={New} path="/new" />
        <Route Component={AddApp} path="/addApp" />
        <Route Component={Home} path="/home" />
        <Route Component={Main} path="/main" />
        <Route Component={MyPage} path="/myPage" />
        <Route Component={Register} path="/register" />
      </Routes>
    </Router>
  );
}

export default App;
