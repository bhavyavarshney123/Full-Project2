import React, { useState } from 'react';
import axios from 'axios';

const Preparation = () => {
    const [organisation, setOrganisation] = useState('');
    const [exam, setExam] = useState('');
    const [subject, setSubject] = useState('');
    const [faculty, setFaculty] = useState('');

    const handleEnroll = async () => {
        try {
            const res = await axios.post('/api/preparation/enroll', {
                organisation, exam, subject, faculty
            });
            console.log(res.data);
            // Show a success message or redirect
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Preparation</h1>
            <input type="text" placeholder="Choose Organisation" value={organisation} onChange={e => setOrganisation(e.target.value)} />
            <input type="text" placeholder="Choose Exam" value={exam} onChange={e => setExam(e.target.value)} />
            <input type="text" placeholder="Choose Subject" value={subject} onChange={e => setSubject(e.target.value)} />
            <input type="text" placeholder="Choose Your Desired Faculty" value={faculty} onChange={e => setFaculty(e.target.value)} />
            <button onClick={handleEnroll}>Enroll Now</button>
        </div>
    );
};

export default Preparation;
