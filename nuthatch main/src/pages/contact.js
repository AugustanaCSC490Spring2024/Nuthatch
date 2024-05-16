import React from "react";
import {useState} from "react";
import "../styles/Contact.css";

function Contact(props){
    // const [input, setInputs] = useState({});

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(input);
    // }

    return (
        <div className = "contact-container">
            <h1 className="contact-heading">Contact Us</h1>
            <p>Email: </p>
            <p>Phone: </p>
        </div>
        // <div className = "formBox">
        // <h1 class="TitleText">Contact Us</h1>
        // <form onSubmit={handleSubmit}>
        //     <div class="name">
        //     <label>Enter your name:
        //     <input 
        //         type="text"
        //         name="client_name"
        //         value= {input.client_name || ""}
        //         onChange={handleChange}
        //         placeholder="Enter your name here"
        //     />
        //     </label>
        //     </div>
        //     <div class="email">
        //     <label>Enter your email:
        //         <input 
        //             type="text"
        //             name="client_email"
        //             value={input.client_email || ""}
        //             onChange={handleChange}
        //             placeholder="Enter your email here"
        //         />
        //     </label>
        //     </div>
        //     <div class="comment">
        //     <label>Comment:
        //         <input
        //             type="text"
        //             name="client_feedback"
        //             value={input.client_feedback || ""}
        //             onChange={handleChange}
        //             placeholder="Enter your comment here"
        //         />
        //     </label>
        //     </div>
        //     <input class= "btn1" type= "submit"/>
        // </form>
        // </div>
    )
}

export default Contact;

