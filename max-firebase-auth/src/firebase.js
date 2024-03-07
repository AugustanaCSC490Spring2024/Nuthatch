// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7XeGLv7NrxT3qd8TQEG1nG8GewbPxI-g",
  authDomain: "max---tech-demo.firebaseapp.com",
  projectId: "max---tech-demo",
  storageBucket: "max---tech-demo.appspot.com",
  messagingSenderId: "607817686275",
  appId: "1:607817686275:web:10d6630eb1fd2864d69d36",
  measurementId: "G-DGTWL1KGEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);