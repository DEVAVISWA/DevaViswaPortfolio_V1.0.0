import React from "react";
import "./App.css";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<>404 Not Found</>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
