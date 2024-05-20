import React, { useEffect } from "react";
import "../App.css";
import "../styles/Search.css";
import { useState } from 'react';
import { useParams } from "react-router-dom";

import SearchComponent from '../components/SearchComponent';
import Lesson from "../components/Lesson";
import {getLessonFromFirestoreByID, saveLessonToFirestore} from '../firestoreFunctions';
import {auth} from '../firebase';

const Search = (props) => {
  const [currentLesson, setCurrentLesson] = useState({'title': 'Untitled Lesson', 'description' : "No Description", 'drillCodes':[]});

  const addCardToLesson = function (cardCode) {
    if (currentLesson.drillCodes.includes(cardCode)) {
      // console.log("Card already exists in current lesson");
    } else {
      // console.log("Adding card to lesson: " + cardCode);
      const newDrillCodes = [...currentLesson.drillCodes, cardCode];
      const newLesson = {...currentLesson, drillCodes:newDrillCodes}
      // console.log(JSON.stringify(newLesson));
      setCurrentLesson(newLesson);
      saveLessonToFirestore(lessonID, newLesson)
    }
  }

  const removeCardFromLesson = function (cardCode) {
    // console.log("Removing card from lesson: " + cardCode);
    const newDrillCodes = currentLesson.drillCodes.filter(code => code!== cardCode);
    const newLesson = {...currentLesson, drillCodes:newDrillCodes}
    // console.log(JSON.stringify(newLesson));
    setCurrentLesson(newLesson);
    saveLessonToFirestore(lessonID, newLesson)
  }

  const setTitleHandler = function (newTitle) {
    const newLesson = {...currentLesson, title:newTitle}
    setCurrentLesson(newLesson);
    saveLessonToFirestore(lessonID, newLesson)
  }

  const setDescriptionHandler = function (newDescription) {
    const newLesson = {...currentLesson, description:newDescription}
    setCurrentLesson(newLesson);
    saveLessonToFirestore(lessonID, newLesson)
  }

  const {lessonID} = useParams();

  useEffect(() => {
    // Load lesson from firestore
    async function fetchLesson() {
      const theLesson = await getLessonFromFirestoreByID(lessonID);
      // console.log("Lesson with ID: ", lessonID, " = ", JSON.stringify(theLesson));
      
      setCurrentLesson(theLesson);
    };
    if (lessonID && auth.currentUser && props.drillLibrary && props.drillLibrary.length > 0) {
      // console.log("about to fetch lesson")
      fetchLesson();
    }
  }, [props.isSignedIn, lessonID, props.drillLibrary]);

  return (
    <div className= 'grid-container'>
      {/* <h1>LESSON ID: {lessonID}</h1> */}
    <div className='lesson-editor'>
      <div className="search-component"><SearchComponent drillLibrary={props.drillLibrary} addCardToLessonFunction={addCardToLesson}/> </div>
      <div className="lesson-component"> <Lesson drillLibrary={props.drillLibrary} lesson={currentLesson} removeCardFromLesson={removeCardFromLesson} setTitleHandler={setTitleHandler} setDescriptionHandler={setDescriptionHandler} /> </div>
    </div>
    {/* DEBUG <div> <p style={{'color':'white'}}>{JSON.stringify(currentLesson)}</p> </div> */}
    </div>
  );
};

export default Search;