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
  apiKey: "AIzaSyBNwD3mJ0YIyO6m_tNgsnZmGGE7GpITb7M",
  authDomain: "payments-test-6370d.firebaseapp.com",
  projectId: "payments-test-6370d",
  storageBucket: "payments-test-6370d.appspot.com",
  messagingSenderId: "476393586160",
  appId: "1:476393586160:web:3d9d9891d8fa97b1987135",
  measurementId: "G-CTYJR2QEEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);