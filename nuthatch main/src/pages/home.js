import React from "react";
import { Link } from "react-router-dom";
import gymnast from './0.png'
import "../styles/Home.css";

function Home(props){
    return (
        
        <div class="container">
            <div class="text-box">
                <h1>GYM PROF</h1>
                <p>Welcome to gym prof, more than a product, we are a philosphy! After coaching rec gymnasts of all abilities and potential, one thing I have learned is that drills are more than just for skill building, they are helpful for confidence building. Many athletes may never get a skill, but they can master drills and see their path to a skill and that is something! Drills are skills. To get started log in or sign up.</p>
                <Link to="/signin" class="login-button">
					Log In
				</Link>
                <Link to="/signup" class="login-button">
					Sign Up
				</Link>
            </div>
            <div class="image">
                <img src={gymnast} alt="gymnastics logo"></img>
            </div>
        </div>
    );
};
 
export default Home;