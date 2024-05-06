import React, { useState } from 'react';

const LessonCreator = ({ addLesson }) => {
    const [lessonName, setLessonName] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (event) => {
        setLessonName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you could also add validation before adding the lesson
        if (!lessonName) {
            alert("Please enter a name for the lesson.");
            return;
        }
        addLesson(lessonName, description);
        setLessonName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="lesson-form">
            <input
                type="text"
                value={lessonName}
                onChange={handleNameChange}
                placeholder="Enter lesson name"
                required
            />
            <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter description"
                required
            />
            <button type="submit">Add Lesson</button>
        </form>
    );
};

export default LessonCreator;
