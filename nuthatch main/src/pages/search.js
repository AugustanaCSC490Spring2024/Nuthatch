import React from "react";
import "../App.css";
import "../styles/Search.css";
import { useState, useEffect } from 'react';
import DrillCardView from '../components/DrillCardView';
import SearchComponent from '../components/SearchComponent';
import Lesson from "../components/Lesson";

const Search = (props) => {
   const [currentLesson, setCurrentLesson] = useState({'title': 'Untitled Lesson', 'description':"not done yet", 'drillCodes':['S1', 'S30']});

   const addCardToLesson = function (cardCode) {
    console.log("Adding card to lesson: " + cardCode);
    const newDrillCodes = [...currentLesson.drillCodes, cardCode];
    const newLesson = {...currentLesson, drillCodes:newDrillCodes}
    console.log(JSON.stringify(newLesson));
     setCurrentLesson(newLesson);
   }

   const removeCardFromLesson = function (cardCode) {
    console.log("Removing card from lesson: " + cardCode);
    const newDrillCodes = currentLesson.drillCodes.filter(code => code!== cardCode);
    const newLesson = {...currentLesson, drillCodes:newDrillCodes}
    console.log(JSON.stringify(newLesson));
     setCurrentLesson(newLesson);
   }

  return (
    <div>
    <div class='lesson-editor'>
      <div class="search-component"><SearchComponent data={props.data} addCardToLessonFunction={addCardToLesson}/> </div>
      <div class="lesson-component"> <Lesson lesson = {currentLesson} removeCardFromLesson = {removeCardFromLesson} /> </div>
    </div>
    <div> <p style={{'color':'white'}}>{JSON.stringify(currentLesson)}</p> </div>
    </div>
  );
};

 
export default Search;