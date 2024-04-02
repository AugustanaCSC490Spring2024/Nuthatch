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
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/account">Account</NavLink>
                    </li>
                </ul>
            </div>
                <div class = "hamburger">
                    <span class ='bar'> </span>
                    <span class ='bar'> </span>
                    <span class ='bar'> </span>
                </div>
        </nav>
  );
}

export default Navbar;
