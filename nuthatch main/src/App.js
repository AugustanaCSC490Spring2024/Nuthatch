import './App.css';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import ProgramInput from './components/auth/ProgramInput.jsx';
import DropDown from './components/auth/DropDown.jsx';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Search from './pages/search.js';
import Print from './pages/print.js';
import LessonsView from './components/LessonsView.js';
import WithNav from './components/WithNav.js';
import WithoutNav from './components/WithoutNav.js';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth, db} from './firebase.js';
import { usePapaParse } from 'react-papaparse';
import { getStorage, ref, getDownloadURL, getBlob } from "firebase/storage";
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs  } from 'firebase/firestore';


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
  const [csvData, setCSVData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [subscription, setSubscription] = useState(null);

  const { readString } = usePapaParse();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    })},[]);

  useEffect(() => {
    const fetchData = async () => { 

      const pathReference = ref(getStorage(), 'Demo1/Demo1.csv');
      const blob = await getBlob(pathReference);
      const csvText = await blob.text();
      readString(csvText, 
                  {   header: true,
                      worker: true,
                      complete: async (results) => {
                        // console.log("Parsing complete:", results);
                        const updatedData = await addFullFilePaths(results.data);
                        // console.log("After adding full file paths:",updatedData);
                        setCSVData(updatedData);
                        // create_cards(csvData);
                      }
                  });
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    // get subscription from Stripe in firebase
    const getActiveSubscription = async (currentUser) => {

      const subscriptionsRef = collection(db, 'customers', currentUser.uid, 'subscriptions');
      const activeSubsQuery = query(subscriptionsRef, where('status', 'in', ['trialing', 'active']));
  
      
      const querySnapshot = await getDocs(activeSubsQuery);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        // setSubscription to the name hidden inside of this doc.data()
      });    
    };

    if (auth.currentUser) {
      getActiveSubscription(auth.currentUser);
   } else {
      setSubscription(null);
   }
  }, [isSignedIn, auth.currentUser]);

  return (
    <section className="header">
    <div className="App">
      <Router>
        <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/programinput' element={<ProgramInput />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search drillLibrary={csvData} isSignedIn={isSignedIn} />} />  
          <Route path='/search/:lessonID' element={<Search drillLibrary={csvData} isSignedIn={isSignedIn} />} />  
          <Route path='/lessonsview' element={<LessonsView drillLibrary={csvData} isSignedIn={isSignedIn} />} />
          <Route path='/dropdown' element={<DropDown />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path='/print/:lessonID' element={<Print drillLibrary={csvData} isSignedIn={isSignedIn}/>} />
        </Route>

        </Routes>
      </Router>
    </div>
    </section>
  );
}

export default App;
