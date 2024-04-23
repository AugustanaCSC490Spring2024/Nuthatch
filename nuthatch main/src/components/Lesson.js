import React from 'react';
import DrillCardView from './DrillCardView'; 
import { getCardByCode } from '../drillDB';

const Lesson = ({ lesson }) => {
    return (
        <div className="lesson">
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
            {/* <div className="drill-cards">
                {lesson.drillCodes.map(drillCode => (
                    <DrillCardView cardItem={getCardByCode(drillCode)} removeCardFromLesson = {props.removeCardFromLesson} />
                ))} 
            </div>  */}
        </div>
    );
};

export default Lesson;
