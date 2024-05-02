import './App.css';
import LessonCreator from './components/LessonCreator.js';
import LessonContainer from './components/LessonContainer.js';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import ProgramInput from './components/auth/ProgramInput.jsx';
import DropDown from './components/auth/DropDown.jsx';
import AuthDetails from './components/AuthDetails';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Search from './pages/search.js';
import LessonView from './components/LessonView.js';
import Navbar from './components/Navbar.js';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { set } from 'firebase/database';
import { usePapaParse } from 'react-papaparse';

import { getStorage, ref, getDownloadURL, getBlob } from "firebase/storage";
import { setListOfDrills } from './drillDB.js';



async function addFullFilePaths(data) {

  const newData = data.map(async (item) => {
      const fullImageReference = ref(getStorage(), item['Pack Folder'] + '/full/' + item.Image);
      const imageURL = await getDownloadURL(fullImageReference);
      item.fullImageURL = imageURL;
      const thumbnailReference = ref(getStorage(), item['Pack Folder'] + '/thumbs/' + item.Image.replace('.png', '.jpg'));
      const thumbnailURL = await getDownloadURL(thumbnailReference);
      item.thumbnailURL = thumbnailURL;
      return item;
    });
    return Promise.all(newData);
  }


function App() {
  const [csvData, setCSVData] = useState([]);

  const { readString } = usePapaParse();

  useEffect(() => {
    const fetchData = async () => { 
      const pathReference = ref(getStorage(), 'Demo1/Demo1.csv');
      const blob = await getBlob(pathReference);
      const csvText = await blob.text();
      readString(csvText, 
                  {   header: true,
                      worker: true,
                      complete: async (results) => {
                        console.log("Parsing complete:", results);
                        const updatedData = await addFullFilePaths(results.data);
                        console.log("After adding full file paths:",updatedData);
                        setCSVData(updatedData);
                        setListOfDrills(updatedData);
                        // create_cards(csvData);
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
          <Route path='/programinput' element={<ProgramInput />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search data={csvData} />} />
          <Route path='/lessonview' element={<LessonView data={csvData} />} />
          <Route path='/dropdown' element={<DropDown />} />
        </Routes>
      </Router>
      {/* <h1>Lesson Planner</h1>
      <LessonContainer />
      { <div>{JSON.stringify(csvData)}</div> }
      <div id="display" class="event-container">     
    </div> */}
    </div>
    </section>
  );
}

export default App;
