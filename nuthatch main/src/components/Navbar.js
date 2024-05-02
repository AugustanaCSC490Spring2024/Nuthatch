import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import "../styles/Navbar.css";
function Navbar() {
  return (
    
        <nav>
            <h3 className="title-text">Gymnastics</h3>
            <div class="nav-links">
                <ul class="nav-menu">
                    <li class="nav-item">
                      <NavLink to="/">HOME</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/search">SEARCH</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/lessonview">LESSONS</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/account">ACCOUNT</NavLink>
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
