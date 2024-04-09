import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import AuthDetails from './components/AuthDetails';
import Home from './pages/home.js';
import About from './pages/about.js';
import Navbar from './components/Navbar.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate,
// } from "react-router-dom";

function App() {
  return (
    <section class="header">
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
    </section>
  );
}

export default App;
