import React from "react";
import logo from "./logo.svg";
import Header from "./components/header/Header";
import "./App.css";
import { Homepage } from "./components/Layout/Homepage";

import {  BrowserRouter as Router ,Routes, Route, Link } from "react-router-dom";
import { FirstScreen } from "./components/Layout/firstscreen/FirstScreen";
import Enroll from "./components/Layout/enrollment/Enroll";
function App() {
  return (
    <div className="App">
      <Header></Header>
    <Router>
    <Routes>
      <Route path="/password" element={<Homepage />} />
      <Route path="/firstscreen" element={<FirstScreen />} />
      <Route path="/firstscreen/enroll" element={<Enroll />} />
      
    </Routes>
    
</Router>
</div>
    

  );
}

export default App;
