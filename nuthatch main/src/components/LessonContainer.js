import React, { useState } from 'react';
import LessonCreator from './LessonCreator';
import Lesson from './Lesson';
import DrillCardView from './DrillCardView';

const LessonsContainer = () => {
    const [lessons, setLessons] = useState([]);

    const addLesson = (name, description) => {
        const newLesson = {
            id: lessons.length + 1, // simple ID assignment
            title: name,
            description: description,
            drills: []  // Start with an empty array of drills
        };
        setLessons([...lessons, newLesson]);
    };

    return (
        <div className="lessons-container">
            <LessonCreator addLesson={addLesson} />
             
            {lessons.map(lesson => (
                <Lesson lesson={lesson} />
            ))}

          
        </div>
    );
};

export default LessonsContainer;
