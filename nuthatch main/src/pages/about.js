import React from "react";
import { Link } from "react-router-dom";
import frostyVid from '../Images/frosty vid.png'



function About(props){
    return (
        
        <div class="container">
            <div class="text-box">
                <h1>About Page</h1>
                <p>In the future, information about this webste will be displayed here, and possibly a tutorial.</p>
            </div>

            <div class="image">
                <img src={frostyVid} alt="Video Placeholder"></img>
            </div>
        </div>
    )
}

export default About;