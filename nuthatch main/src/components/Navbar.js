import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import "../styles/Navbar.css";
import { auth } from '../firebase.js';

function Navbar() {
  return (
    
        <nav>
            <h1 className="title-text">Gymnastics</h1>
            <div className="nav-links">
                <ul className="nav-menu">
                    <li className="nav-item">
                      <NavLink to="/">HOME</NavLink>
                    </li>
                    {auth.currentUser && (
                      <li className="nav-item">
                        <NavLink to="/lessonsview">LESSONS</NavLink>
                      </li>
                    )}
                    <li className="nav-item">
                      <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact">CONTACT</NavLink>
                    </li>                  
                </ul>
            </div>
                <div className = "hamburger">
                    <span className ='bar'> </span>
                    <span className ='bar'> </span>
                    <span className ='bar'> </span>
                </div>
        </nav>
  );
}

export default Navbar;
