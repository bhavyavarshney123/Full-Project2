import React, { useState } from 'react';
import axios from 'axios';

const StudentLogin = () => {
    const [uniRollNumber, setUniRollNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('/api/students/login', { uniRollNumber, password });
            console.log(res.data);
            // You can redirect to student dashboard or store token in localStorage
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Student Login</h1>
            <input type="text" placeholder="University Roll Number" value={uniRollNumber} onChange={e => setUniRollNumber(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default StudentLogin;
