import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username && password) {
            onLogin({ username });
            setUsername('hemanttyadav007@gmail.com');
            setPassword('123456');
        }
    };

    return ( <
        form onSubmit = { handleSubmit }
        className = "login-form" >
        <
        h2 > Login < /h2> <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value)
        }
        placeholder = "Username"
        required /
        >
        <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        placeholder = "Password"
        required /
        >
        <
        button type = "submit" > Login < /button> < /
        form >
    );
};

export default LoginForm;