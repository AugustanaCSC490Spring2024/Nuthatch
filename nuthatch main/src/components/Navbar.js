import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
function Navbar() {
  return (
    
        <nav>
            <h3>Gymnastics</h3>
            <div class="nav-links">
                <ul class="nav-menu">
                    <li class="nav-item">
                      <NavLink to="/">HOME</NavLink>
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
