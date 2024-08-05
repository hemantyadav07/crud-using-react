import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSubmit({ text });
            setText('');
        }
    };

    return ( <
        form onSubmit = { handleSubmit }
        className = "feedback-form" >
        <
        h2 > Feedback < /h2> <
        input type = "text"
        id = "feedbackText"
        onChange = {
            (e) => setText(e.target.value)
        }
        placeholder = "Enter feedback"
        required /
        >
        <
        button type = "submit" > Submit < /button> < /
        form >
    );
};

export default FeedbackForm;