import "../App.css";
import React, { useState, useEffect } from 'react';
import Select from "react-select";

import { getLessonsFromFirestore, createLessonInFirestore, deleteLessonFromFirestore } from "../firestoreFunctions";
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
  try {
  // console.log("Lesson index: ", selectedLessonIndex);
  // console.log("Lesson: ", lessons);
  const lesson = lessons[selectedLessonIndex];
  console.log("Editing lesson: ", lesson);

  const url = "/search/" + lesson.id;
  window.location.assign(url);
  } catch (error) {
    console.log("No lesson ID");
    alert("Please select a lesson to edit");
    return;
  }
}

async function deleteLesson() {
  try {
    // console.log("Lesson index: ", selectedLessonIndex);
    // console.log("Lesson: ", lessons);
    const lesson = lessons[selectedLessonIndex];
    console.log("Deleting lesson: ", lesson);
    await deleteLessonFromFirestore(lesson.id);
  } catch (error) {
    console.log("No lesson ID");
    alert("Please select a lesson to delete");
    return;
  }
}

  async function printLesson() {
    try {
    const lesson = lessons[selectedLessonIndex];
    console.log("Printing lesson: ", lesson);
    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    const url = "/print/" + lesson.id;
    openInNewTab(url);
    } catch (error) {
      console.log("No lesson ID");
      alert("Please select a lesson to print");
      return;
    } 
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
        <button class="btn1" onClick={addLesson}>Create Lesson</button>
        <button class="btn1" onClick={editLesson}>Edit Lesson</button>
        <button class="btn1" onClick={printLesson}>Print</button>
        <button class="btn2" onClick={deleteLesson}>Delete Lesson</button>
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