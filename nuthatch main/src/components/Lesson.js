import React from 'react';
import DrillCardView from './DrillCardView'; 
import { getCardByCode } from '../drillDB';
import "../styles/Lesson.css";

const Lesson = (props) => {
    return (
        <div className="lesson">
            <div className='text-container'>
                <h2>{props.lesson.title}</h2>
                <p>{props.lesson.description}</p>
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
