import "../App.css";
import React, { useState, useEffect } from 'react';
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
         <button class = "btn1" className="btn2" onClick={
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