import React from "react";
import { Link } from "react-router-dom";
import gymnast from './0.png'
import fs from "fs";

function Home(){
    const fs = require("fs");
    const { parse } = require("csv-parse");
    const data = [];

    fs.createReadStream("./Demo1.csv")
    .pipe(
        parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
        })
    )
    .on("data", function (row) {
        // This will push the object row into the array
        data.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        // Here log the result array
        console.log("parsed csv data:");
        console.log(data);
    });

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