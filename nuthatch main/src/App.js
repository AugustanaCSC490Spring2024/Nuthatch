import './App.css';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import AuthDetails from './components/AuthDetails';
import Home from './pages/home.js';
import About from './pages/about.js';
import Navbar from './components/Navbar.js';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { set } from 'firebase/database';
import { usePapaParse } from 'react-papaparse';

import { getStorage, ref, getDownloadURL, getBlob } from "firebase/storage";


function create_cards(data){
  const display = document.getElementById("display");
  for(let i = 0; i < data.length; i++){
    let card = document.createElement("div");
    card.className = "event-card";
    let cardImg =  ''
    let cardData = ''
      for (const key in data[i]) {
        if (key === "CODE" && data[i][key] === '') return;
        if (key === "Image") {
            cardImg += `<img src="${data[i][key]}" alt="Photo of gymnastics event called ${data[i]["Title"]}">`;
            cardImg += '<button type="button">Add to lesson</button>';
        }
        if (typeof data[i][key] === "string") {
            var keywordArray = data[i][key].split(',');
            for (let k = 0; k < keywordArray.length; k++) {
                cardData += keywordArray[k];
            }
        }
    }
    card.innerHTML = cardImg;
    display.appendChild(card);
  }
}

function App() {
  const [csvData, setCSVData] = useState("no data yet");

  const { readString } = usePapaParse();

  useEffect(() => {
    const fetchData = async () => { 
      const pathReference = ref(getStorage(), 'Demo1/Demo1.csv');
      const blob = await getBlob(pathReference);
      const csvText = await blob.text();
      readString(csvText, 
                  {   header: true,
                      worker: true,
                      complete: (results) => {
                        console.log("Parsing complete:", results);
                        setCSVData(results.data);
                        create_cards(csvData);
                      }
                  });
    }
    fetchData();
  }, []);
  
  

  return (
    <section class="header">
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home data={csvData} />} />
          <Route path="/signin" element={<SignIn /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      {/* <div>{JSON.stringify(csvData)}</div> */}
      <div id="display" class="event-container">
        
    </div>
    </div>
    </section>
  );
}

export default App;
