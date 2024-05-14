import React from "react";
import {useState} from "react";

function Contact(props){
    const [input, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input
                type="text"
                name="client_name"
                value= {input.client_name || ""}
                onChange={handleChange}
            />
            </label>
            <label>Enter your phone email:
                <input 
                    type="text"
                    name="client_email"
                    value={input.client_email || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Comment:
                <input
                    type="text"
                    name="client_feedback"
                    value={input.client_feedback || ""}
                    onChange={handleChange}
                />
            </label>
            <input type= "submit"/>
        </form>
    )
}

export default Contact;

