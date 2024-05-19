import React from "react";
import { Link } from "react-router-dom";
import gymnast from "../Images/gymnast.png";
import logo from "../Images/gymProfLogo.png";
import "../styles/Home.css";
import { subscribeFree, subscribeMain, subscribePremiumTier } from "../subscribe.js";
import { auth, signOut } from "../firebase.js"

function Home(props){
    return (
        <div className="container">
            <div className="text-box">
                <h1 className="TitleText">GYM PROF</h1>
                <p>Welcome to gym prof, more than a product, we are a philosphy! After coaching rec gymnasts of all abilities and potential, one thing I have learned is that drills are more than just for skill building, they are helpful for confidence building. Many athletes may never get a skill, but they can master drills and see their path to a skill and that is something! Drills are skills. To get started log in or sign up.</p>
                {auth.currentUser == null ?
                    (<div>
                    <button className="btn1">
                        <Link className="noEffects" to="/signin">Log In</Link>
                    </button>
                    <button className="btn2">
                        <Link className="noEffects" to="/signup">Sign Up</Link>
                    </button>
                    </div>) :
                    (<button className="btn2" onClick={() => signOut()}>Sign Out</button>)
                }
                <div className="buttons">
                    {/* <a href='https://docs.stripe.com/terminal/references/testing'>Fake Cards</a>  */}
                    {auth.currentUser && (
                    <button className="btn1" onClick={() => subscribeFree()}>Free Subscription</button>
                    )}
                    {auth.currentUser && (
                    <button className="btn1" onClick={() => subscribeMain()}>Main Subscription</button>
                    )}
                    {auth.currentUser && (
                    <button className="btn1" onClick={() => subscribePremiumTier()}>Premium Subscription</button>
                    )}

                </div>
                    <p>{auth.currentUser ? "Signed in as " + auth.currentUser.email : "Not signed in"} </p>
                    <p>{props.subscriptionName ? "Subscription plan: " + props.subscriptionName : "No Subscription"}</p>
            </div>
            <div className="image">
                <img src={logo} alt="logo"></img>
                {/* <img src={gymnast} alt="gymnastics dancer"></img> */}
            </div>
        </div>
    );
};
 
export default Home;