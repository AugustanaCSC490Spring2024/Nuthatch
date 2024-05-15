import "../App.css";
import React, { useState, useEffect } from 'react';
import Select from "react-select";

import { getLessonsFromFirestore, createLessonInFirestore } from "../firestoreFunctions";
import { auth } from "../firebase";


const LessonsView = (props) => { 
  const [lessons, setLessons] = useState([]);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  
  async function fetchLessons() {
    // Load lessons from firstore
    const theLessons = await getLessonsFromFirestore();
    setLessons(theLessons);
  };

  async function addLesson() {
    const newLesson = await createLessonInFirestore();
    setLessons([...lessons, newLesson]);
  }

  async function editLesson() {
    console.log("Lesson index: ", selectedLessonIndex);
    console.log("Lesson: ", lessons);
    const lesson = lessons[selectedLessonIndex];
    console.log("Editing lesson: ", lesson);

    const url = "/search/" + lesson.id;
    window.location.assign(url);
  }

  useEffect(() => {  
    if (auth.currentUser) {
      fetchLessons();
    }
  }, [props.isSignedIn]);

  const options = lessons.map((lesson, index) => {
    return { value: index, label: lesson.title };
  });
  console.log("OPTIONS:", options);

  return (
    <div class= 'container'>
         <button class="btn2" onClick={addLesson}>Create Lesson</button>
         <button class="btn2" onClick={editLesson}>Edit Lesson</button>
         <div>
        <Select  defaultValue={selectedLessonIndex}
                 onChange={({value, label}) => setSelectedLessonIndex(value)}
                 options={options}  
        />
         </div>
    </div>
  );
};

export default LessonsView;