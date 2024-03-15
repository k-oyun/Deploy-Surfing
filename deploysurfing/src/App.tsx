import React from "react";
import Header from "./Components/Header.tsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
}

export default App;
