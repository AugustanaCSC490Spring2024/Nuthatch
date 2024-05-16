import { collection, getDocs, addDoc, query, where, onSnapshot } from "firebase/firestore";
import db, { auth } from './firebase.js';

async function fetchProducts() {
    
    const q = query(collection(db, "products"), where("active", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (productDoc) => {
      // console.log(productDoc.id, " => ", productDoc.data());
      const querySnapshot = await getDocs(collection(db, "products", productDoc.id, "prices"));
      querySnapshot.forEach((priceDoc) => {
        // console.log(priceDoc.id, " => ", priceDoc.data());
      });
    });
  }
  fetchProducts();


async function subscribeFree() { 
    try {
      // console.log("db",db)
      // console.log("id", auth.currentUser.uid)
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
        // console.log(`An error occured: ${error.message}`);
        alert(`An error occured: ${error.message}`);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        window.location.assign(url);
      }
    });
    
    } catch (error) {
      // console.log("Signed in error message:", error.message);
      alert("You need to be signed in");
    }
  }
  
  async function subscribeMain() { 
    try {
      // console.log("db",db)
      // console.log("id", auth.currentUser.uid)
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
        // console.log(`An error occured: ${error.message}`);
        alert(`An error occured: ${error.message}`);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        window.location.assign(url);
      }
    });
    
    } catch (error) {
      // console.log("Signed in error message:", error.message);
      alert("You need to be signed in");
    }
  }
  
  async function subscribePremiumTier() { 
    try {
      // console.log("db",db)
      // console.log("id", auth.currentUser.uid)
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
        // console.log(`An error occured: ${error.message}`);
        alert(`An error occured: ${error.message}`);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        window.location.assign(url);
      }
    });
    
    } catch (error) {
      // console.log("Signed in error message:", error.message);
      alert("You need to be signed in");
    }
  }

    export { subscribeFree, subscribeMain, subscribePremiumTier };