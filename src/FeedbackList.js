import React from 'react';

const FeedbackList = ({ feedbacks, onEdit, onDelete }) => {
    return ( <
        ul className = "feedback-list" > {
            feedbacks.map(feedback => ( <
                li key = { feedback.id } > { feedback.text } <
                button onClick = {
                    () => onEdit(feedback.id) } > Edit < /button> <
                button onClick = {
                    () => onDelete(feedback.id) } > Delete < /button> <
                /li>
            ))
        } <
        /ul>
    );
};

export default FeedbackList;