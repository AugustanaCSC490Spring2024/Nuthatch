import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from "../../firebase";

import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            console.log(userCredential);
            alert('Sign-up successful can now log in');
        })
        .catch((error) => {
            console.log(error);
            console.error('Sign-in error:', error.message);
            alert(`Sign-in error: ${error.message}`);
        });
    }
    return (
        <div className='sign_container'>
            <form onSubmit={signUp}>
                <div className='sign_header'>
                    <div className='sign_text'>Sign Up</div>
                    <div className='sign_underline'></div>
                </div>
                <div className='sign_inputs'>
                    <div className="sign_input">
                        <img src={email_icon} alt = ""/>
                        <input type="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>  
                    <div className="sign_input">
                        <img src={password_icon} alt = ""/>
                        <input type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div> 
                </div>   
                <div className='sign_forgot-password'>Lost Password? <span>Click here</span></div>
                <div className='sign_submit-container'>
                    <button type="submit" className="sign_submit">Sign Up</button>
                </div> 
                
            </form>
        </div>
    );
};

export default SignUp;