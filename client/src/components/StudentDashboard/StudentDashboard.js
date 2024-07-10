import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
    return (
        <div>
            <h1>Student Dashboard</h1>
            <ul>
                <li><Link to="/student-dashboard/examinations">Examinations</Link></li>
                <li><Link to="/student-dashboard/results">Check Results</Link></li>
                <li><Link to="/student-dashboard/preparation">Preparation</Link></li>
                <li><Link to="/student-dashboard/question-list">Question List</Link></li>
                <li><Link to="/student-dashboard/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default StudentDashboard;
