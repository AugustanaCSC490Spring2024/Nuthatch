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
    </div>
    </section>
  );
}

export default App;
