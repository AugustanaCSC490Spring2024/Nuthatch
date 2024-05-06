import "../App.css";
import { auth } from "../firebase";
import React, { useState, useEffect } from 'react';
import DrillCardView from '../components/DrillCardView';
import SearchComponent from '../components/SearchComponent';
import Lesson from "../components/Lesson";
import LessonCreator from "./LessonCreator";
import LessonsContainer from "./LessonContainer";

const LessonView = (props) => {
    
  return (
    <div class= 'container'>
         <button className="lesson-create-button" onClick={
          () => props.LessonContainer.AddLesson(
            {
              title: "",
              description: "",
              drillCodes: []
            }
          )
         }>Create Lesson</button>
    </div>
  );
};

export default LessonView;