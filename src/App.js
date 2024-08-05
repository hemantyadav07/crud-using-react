import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);
    const [feedbacks, setFeedbacks] = useState([]);
    const [editId, setEditId] = useState(null);


    useEffect(() => {
        const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        setFeedbacks(savedFeedbacks);
    }, []);


    useEffect(() => {
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }, [feedbacks]);

    const handleLogin = (userInfo) => {
        setUser(userInfo);
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleAddOrUpdateFeedback = (feedback) => {
        if (editId) {
            setFeedbacks(feedbacks.map(f => f.id === editId ? {...feedback, id: editId } : f));
            setEditId(null);
        } else {
            setFeedbacks([...feedbacks, {...feedback, id: Date.now() }]);
        }
    };

    const handleEdit = (id) => {
        const feedback = feedbacks.find(f => f.id === id);
        if (feedback) {
            setEditId(id);
            document.getElementById('feedbackText').value = feedback.text;
        }
    };

    const handleDelete = (id) => {
        setFeedbacks(feedbacks.filter(f => f.id !== id));
    };

    return ( <
        div className = "App" > {!user ? ( <
                LoginForm onLogin = { handleLogin }
                />
            ) : ( <
                >
                <
                button onClick = { handleLogout } > Logout < /button> <
                FeedbackForm onSubmit = { handleAddOrUpdateFeedback }
                /> <
                FeedbackList feedbacks = { feedbacks }
                onEdit = { handleEdit }
                onDelete = { handleDelete }
                /> < / >
            )
        } <
        /div>
    );
};

export default App;