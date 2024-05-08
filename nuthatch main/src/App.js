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
import db, { auth } from './firebase.js';
import { usePapaParse } from 'react-papaparse';
import { collection, getDocs, addDoc, query, where, doc, onSnapshot } from "firebase/firestore";



import { getStorage, ref, getDownloadURL, getBlob } from "firebase/storage";
import { setListOfDrills } from './drillDB.js';

async function subscribeFree() { 
  try {
    console.log("db",db)
    console.log("id", auth.currentUser.uid)
    const docRef = await addDoc(collection(db, "customers", auth.currentUser.uid, "checkout_sessions"), {
      price: 'price_1PDojhC2ueubEsOd8kNlRjrf',
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
  

  

  // NEED TO TRASNLATE the following event listening code to use
  // the modular firebase API instead of the old way...
  // Wait for the CheckoutSession to get attached by the extension

  onSnapshot(docRef,(snap) => {
    const { error, url } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      console.log(`An error occured: ${error.message}`);
      alert(`An error occured: ${error.message}`);
    }
    if (url) {
      // We have a Stripe Checkout URL, let's redirect.
      window.location.assign(url);
    }
  });
  
  } catch (error) {
    console.log("Signed in error message:", error.message);
    alert("You need to be signed in");
  }
}

async function subscribeMain() { 
  try {
    console.log("db",db)
    console.log("id", auth.currentUser.uid)
    const docRef = await addDoc(collection(db, "customers", auth.currentUser.uid, "checkout_sessions"), {
      price: 'price_1P9TdDC2ueubEsOdDuf82Ikr',
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
  

  

  // NEED TO TRASNLATE the following event listening code to use
  // the modular firebase API instead of the old way...
  // Wait for the CheckoutSession to get attached by the extension

  onSnapshot(docRef,(snap) => {
    const { error, url } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      console.log(`An error occured: ${error.message}`);
      alert(`An error occured: ${error.message}`);
    }
    if (url) {
      // We have a Stripe Checkout URL, let's redirect.
      window.location.assign(url);
    }
  });
  
  } catch (error) {
    console.log("Signed in error message:", error.message);
    alert("You need to be signed in");
  }
}

async function subscribePremiumTier() { 
  try {
    console.log("db",db)
    console.log("id", auth.currentUser.uid)
    const docRef = await addDoc(collection(db, "customers", auth.currentUser.uid, "checkout_sessions"), {
      price: 'price_1P9TlCC2ueubEsOdRFNAo7VE',
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
  

  

  // NEED TO TRASNLATE the following event listening code to use
  // the modular firebase API instead of the old way...
  // Wait for the CheckoutSession to get attached by the extension

  onSnapshot(docRef,(snap) => {
    const { error, url } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      console.log(`An error occured: ${error.message}`);
      alert(`An error occured: ${error.message}`);
    }
    if (url) {
      // We have a Stripe Checkout URL, let's redirect.
      window.location.assign(url);
    }
  });
  
  } catch (error) {
    console.log("Signed in error message:", error.message);
    alert("You need to be signed in");
  }
}

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
    async function fetchProducts() {
    
      const q = query(collection(db, "products"), where("active", "==", true));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (productDoc) => {
        console.log(productDoc.id, " => ", productDoc.data());
        const querySnapshot = await getDocs(collection(db, "products", productDoc.id, "prices"));
        querySnapshot.forEach((priceDoc) => {
          console.log(priceDoc.id, " => ", priceDoc.data());
        });
      });
    }
    fetchProducts();
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
    </div>
    {/* <a href='https://docs.stripe.com/terminal/references/testing'>Fake Cards</a>  */}
    <button class = "payButton" onClick={() => subscribeFree()}>Free Subscription</button>
    <button class = "payButton" onClick={() => subscribeMain()}>Main Subscription</button>
    <button class = "payButton" onClick={() => subscribePremiumTier()}>Premium Subscription</button>
    <p>{auth.currentUser ? "Signed in as " + auth.currentUser.email : "Not signed in"} </p>
    </section>
  );
}

export default App;
