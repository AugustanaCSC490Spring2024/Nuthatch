import "../App.css";
import { auth } from "../firebase";
import React, { useState, useEffect } from 'react';
import DrillCardView from '../components/DrillCardView';
import SearchComponent from '../components/SearchComponent';
import Lesson from "../components/Lesson";
import LessonCreator from "./LessonCreator";
import LessonsContainer from "./LessonContainer";
import { getLessonsFromFirestore } from "../firestoreFunctions";

const LessonView = (props) => { 
  const [lessons, setLessons] = useState([]);
  
  useEffect(() => {

    async function fetchLessons() {
      // Load lessons from firstore
      const theLessons = await getLessonsFromFirestore();
      setLessons(theLessons);
    };
    fetchLessons();
  }, []);



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
         <div>
         <ul>
         {lessons.map(lesson => (
           <li>{lesson.title}</li>
         ))}
         </ul>
         </div>
    </div>
  );
};

export default LessonView;