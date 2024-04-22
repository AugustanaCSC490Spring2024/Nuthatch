import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import React, { useState, useEffect } from 'react';
import db, { auth } from './firebase';
import { collection, getDocs, addDoc, query, where } from "firebase/firestore"; 

function App() {
  useEffect(() => {

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
    } , [])
  

function subscribe() { 


  await addDoc(doc(db, "customers", auth.currentUser.id, "checkout_sessions"), {
    price: 'price_1P6yuHRpOObAemDAlnVgu088',
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });

  // NEED TO TRASNLATE the following event listening code to use
  // the modular firebase API instead of the old way...
  // Wait for the CheckoutSession to get attached by the extension
docRef.onSnapshot((snap) => {
  const { error, url } = snap.data();
  if (error) {
    // Show an error to your customer and
    // inspect your Cloud Function logs in the Firebase console.
    alert(`An error occured: ${error.message}`);
  }
  if (url) {
    // We have a Stripe Checkout URL, let's redirect.
    window.location.assign(url);
  }
});

    
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      <button onClick={() => subscribe()}>Subscribe</button>
    </div>
  );
}

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log("rendering HOME")
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}


export default App;
