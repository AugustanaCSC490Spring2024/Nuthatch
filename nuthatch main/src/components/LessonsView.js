import "../App.css";
import React, { useState, useEffect } from 'react';
import Select from "react-select";

import { getLessonsFromFirestore, createLessonInFirestore, deleteLessonFromFirestore } from "../firestoreFunctions";
import { auth } from "../firebase";


const LessonsView = (props) => { 
  const [lessons, setLessons] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  
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
  const lessonID = selectedOption.value;
  console.log("Editing lesson: ", lessonID);

  const url = "/search/" + lessonID;
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
    const lessonID = selectedOption.value;
    // console.log("Deleting lesson: ", lesson);
    await deleteLessonFromFirestore(lessonID);
    const newLessons = lessons.filter((item) => item.id !== lessonID); 
    setLessons(newLessons);
    const newSelectedOption = { value: newLessons[0].id, label: newLessons[0].title}
    setSelectedOption(newSelectedOption);
    // console.log("Options[0]: ", options[0])

  } catch (error) {
    console.log("No lesson ID");
    alert("Please select a lesson to delete");
    return;
  }

}

  async function printLesson() {
    try {
    const lessonID = selectedOption.value;
    console.log("Printing lesson: ", lessonID);
    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    const url = "/print/" + lessonID;
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
    return { value: lesson.id, label: lesson.title };
  });
  console.log("OPTIONS:", options);

  return (
    <div class= 'container'>
        <button class="btn1" onClick={addLesson}>Create Lesson</button>
        <button class="btn1" onClick={editLesson}>Edit Lesson</button>
        <button class="btn1" onClick={printLesson}>Print</button>
        <button class="btn2" onClick={deleteLesson}>Delete Lesson</button>
         <div class= "dropDown">
        <Select  value={selectedOption}
                onChange={setSelectedOption}
                options={options}  
        />
         </div>

    </div>
  );
};

export default LessonsView;