import React from "react";
import frostyVid from '../Images/frosty vid.png'



function About(props){
    return (
        
        <div class="container">
            <div class="text-box">
                <h1>About GymProf</h1>
                <p>Thank you so much for stopping in to see the gymnastics curriculum products I have developed. While I have named the business "The Gymnastics Professor," the name is a little misleading. I am a professor and I do coach gymnastics, but I am not a professor of gymnastics.

                I have been teaching college for 13 years as an Assistant Professor of low brass at Augustana College in Illinois. When my oldest daughter got hyper focused on gymnastics, I started coaching because we had to travel to the gym in Iowa City and the practices were long.  I kept hearing the message of not letting your child practice at home incorrectly, and that's literally all my child did all day long, so I researched how you were supposed to do skills. I found so much cross over between music and gymnastics skill progression that I decided to take it a step further here. 

                I hope you enjoy my materials. If you see something you want customized, please let me know and I will let you know if I can do it for you. </p>

                <h1>About the developers</h1>
                <p>Samantha Keehn: product designer</p>
                <p>Logan Hansen, Jack Kiefer, Maya Conway, & Max Sellers: developers</p>
                <p>Special thanks to Forrest Stonedahl</p>
            </div>

            <div class="image">
                <img src={frostyVid} alt="Video Placeholder"></img>
            </div>
        </div>
    )
}

export default About;