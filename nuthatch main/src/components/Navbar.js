import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import "../styles/Navbar.css";
import { auth } from '../firebase.js';

function Navbar() {
  return (
    
        <nav>
            <h3 className="title-text">Gymnastics</h3>
            <div class="nav-links">
                <ul class="nav-menu">
                    <li class="nav-item">
                      <NavLink to="/">HOME</NavLink>
                    </li>
                    {/* {auth.currentUser && (
                      <li class="nav-item">
                        <NavLink to="/search">SEARCH</NavLink>
                      </li> 
                    )} */}
                    {auth.currentUser && (
                      <li class="nav-item">
                        <NavLink to="/lessonsview">LESSONS</NavLink>
                      </li>
                    )}
                    <li class="nav-item">
                      <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/contact">CONTACT</NavLink>
                    </li>                  
                </ul>
            </div>
                <div className = "hamburger">
                    <span class ='bar'> </span>
                    <span class ='bar'> </span>
                    <span class ='bar'> </span>
                </div>
        </nav>
  );
}

export default Navbar;
