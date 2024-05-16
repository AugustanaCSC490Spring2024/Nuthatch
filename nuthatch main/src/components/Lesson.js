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
                
                <h1 class="lessonTitle">{props.lesson.title}</h1>
                <input 
                placeholder="Change Title"
                value={props.lesson.title}
                onChange={(e) => { props.setTitleHandler(e.target.value);}} 
                ></input>
                <h2>Description</h2>
                <p>{props.lesson.description}</p>
                <input
                value={props.lesson.description}
                placeholder="Change Description"
                onChange={(e) => { props.setDescriptionHandler(e.target.value);}} 
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
