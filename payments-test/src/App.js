import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import React, { useState, useEffect } from 'react';
import db, { auth } from '../firebase';

function App() {
  return (
    <div className="App">
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
    </div>
  );
}

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.collection('products').where('active', '==', true).get().then(snapshot => {
      console.log('snapshot', snapshot);
      })
  } , [])
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}


export default App;
