import React from 'react';
import DrillCardView from './DrillCardView'; 
import { getCardByCode } from '../drillDB';
import "../styles/Lesson.css";
import { saveLessonToFirestore } from '../firestoreFunctions';
import { useParams } from 'react-router-dom';

const Lesson = (props) => {

    
  const {lessonID} = useParams();

    return (
        <div className="lesson">
            {/* <p>ID: {JSON.stringify(lessonID)}</p> */}
            <div className='text-container'>
                
                <h2>{props.lesson.title}</h2>
                <input 
                placeholder="Change Title"
                onChange={(e) => {
                    props.lesson.title = e.target.value;
                    saveLessonToFirestore(lessonID, props.lesson);
                }} 
                ></input>
                <p>{props.lesson.description}</p>
                <input
                placeholder="Change Description"
                onChange={(e) => {
                    props.lesson.description = e.target.value;
                    saveLessonToFirestore(lessonID, props.lesson);
                }}
                ></input>
                {/* no longer needed */}
                {/* <button class="btn1" onClick={() => saveLessonToFirestore(lessonID, props.lesson)}>Save Lesson</button> */}
            </div>
            <div className="drill-cards">
                {props.lesson.drillCodes.map(drillCode => (
                    <DrillCardView cardItem={getCardByCode(drillCode)} removeCardFromLesson = {props.removeCardFromLesson} />
                ))} 
            </div>  
        </div>
    );
};

export default Lesson;
