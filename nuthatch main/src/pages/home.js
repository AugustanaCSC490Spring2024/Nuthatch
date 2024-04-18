import React from "react";
import { Link } from "react-router-dom";
import gymnast from './0.png'



function Home(props){
    return (
        
        <div class="container">
            <div class="text-box">
                <h1>Gymnastics Website</h1>
                <p>Welcome to gymnastics website! If you have an account do this.</p>
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