import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Examinations = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await axios.get('/api/exams');
                setExams(response.data);
            } catch (error) {
                console.error('Error fetching exams', error);
            }
        };

        fetchExams();
    }, []);

    return (
        <div>
            <h1>Examinations</h1>
            <ul>
                {exams.map(exam => (
                    <li key={exam.id}>{exam.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Examinations;
