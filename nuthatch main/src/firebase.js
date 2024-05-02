// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPsG9Ylws1BnwrUrcCgsH02mKUWHuAF9E",
  authDomain: "nuthatch-1df69.firebaseapp.com",
  projectId: "nuthatch-1df69",
  storageBucket: "nuthatch-1df69.appspot.com",
  messagingSenderId: "697304117125",
  appId: "1:697304117125:web:77d74c6586d6359feadeec",
  measurementId: "G-2TMZT7G5QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
  