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
  const [currentLesson, setCurrentLesson] = useState({'title': 'Untitled Lesson', 'description':"not done yet", 'drillCodes':[]});

  const addCardToLesson = function (cardCode) {
    if (currentLesson.drillCodes.includes(cardCode)) {
      console.log("Card already exists in current lesson");
    } else {
      console.log("Adding card to lesson: " + cardCode);
      const newDrillCodes = [...currentLesson.drillCodes, cardCode];
      const newLesson = {...currentLesson, drillCodes:newDrillCodes}
      console.log(JSON.stringify(newLesson));
      setCurrentLesson(newLesson);
      saveLessonToFirestore(lessonID, newLesson)
    }
  }

  const removeCardFromLesson = function (cardCode) {
    console.log("Removing card from lesson: " + cardCode);
    const newDrillCodes = currentLesson.drillCodes.filter(code => code!== cardCode);
    const newLesson = {...currentLesson, drillCodes:newDrillCodes}
    console.log(JSON.stringify(newLesson));
    setCurrentLesson(newLesson);
    saveLessonToFirestore(lessonID, newLesson)
  }

  const {lessonID} = useParams();

  useEffect(() => {
    // Load lesson from firestore
    async function fetchLesson() {
      const theLesson = await getLessonFromFirestoreByID(lessonID);
      console.log("Lesson with ID: ", lessonID, " = ", JSON.stringify(theLesson));
      
      setCurrentLesson(theLesson);
    };
    if (lessonID && auth.currentUser) {
      console.log("about to fetch lesson")
      fetchLesson();
    }
  }, [props.isSignedIn, lessonID]);

  return (
    <div class= 'grid-container'>
      <h1>LESSON ID: {lessonID}</h1>
    <div class='lesson-editor'>
      <div class="search-component"><SearchComponent drillLibrary={props.drillLibrary} addCardToLessonFunction={addCardToLesson}/> </div>
      <div class="lesson-component"> <Lesson lesson = {currentLesson} removeCardFromLesson = {removeCardFromLesson}/> </div>
    </div>
    {/* DEBUG <div> <p style={{'color':'white'}}>{JSON.stringify(currentLesson)}</p> </div> */}
    </div>
  );
};

export default Search;