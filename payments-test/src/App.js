import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import React, { useState, useEffect } from 'react';
import db, { auth } from './firebase';
import { collection, getDocs, addDoc, query, where, doc, onSnapshot } from "firebase/firestore"; 

async function subscribe() { 

  console.log("db",db)
  console.log("id", auth.currentUser.uid)
  const docRef = await addDoc(collection(db, "customers", auth.currentUser.uid, "checkout_sessions"), {
    price: 'price_1P6yuHRpOObAemDAlnVgu088',
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
}

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

    useEffect(() => {

      async function checkSubscription() {
      
          const q = query(collection(db, "customers", auth.currentUser.uid, "subscriptions"), where('status', 'in', ['trialing', 'active']));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(async (subscriptionnDoc) => {
            console.log(productDoc.id, " => ", productDoc.data());
            const querySnapshot = await getDocs(collection(db, "products", productDoc.id, "prices"));
            querySnapshot.forEach((priceDoc) => {
              console.log(priceDoc.id, " => ", priceDoc.data());
            });
          });
        }
        checkSubscription();
      } , [])
    


  //   db.collection('customers')
  // .doc(currentUser.uid)
  // .collection('subscriptions')
  // .where('status', 'in', ['trialing', 'active'])
  // .onSnapshot(async (snapshot) => {
  //   // In this implementation we only expect one active or trialing subscription to exist.
  //   const doc = snapshot.docs[0];
  //   console.log(doc.id, ' => ', doc.data());
  // });
  
    
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      {/* <a href='https://docs.stripe.com/terminal/references/testing'>Fake Cards</a> */}
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
