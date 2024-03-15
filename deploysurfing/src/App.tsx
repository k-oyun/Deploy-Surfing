import React from "react";
import Header from "./Components/Header.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyApp from "./Routes/MyApp.tsx";
import Login from "./Routes/Login.tsx";
import New from "./Routes/New.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={MyApp} path="/myapp" />
        <Route Component={New} path="/new" />
      </Routes>
    </Router>
  );
}

export default App;
