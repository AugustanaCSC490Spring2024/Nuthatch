// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1wtub2-d9LgOETBuJqa5d2yJv4YzUDzc",
  authDomain: "login-242f9.firebaseapp.com",
  projectId: "login-242f9",
  storageBucket: "login-242f9.appspot.com",
  messagingSenderId: "205624948296",
  appId: "1:205624948296:web:f305105b983d04a1e08a7d",
  measurementId: "G-B94ENV508E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);