import React from 'react';
import DrillCard from './DrillCardView'; 

const Lesson = ({ lesson }) => {
    return (
        <div className="lesson">
            <h2>{lesson.title}</h2>
            <p>{lesson.description}</p>
            <div className="drill-cards">
                {lesson.drills.map(drill => (
                    <DrillCard key={drill.id} cardItem={drill} />
                ))}
            </div>
        </div>
    );
};

export default Lesson;
