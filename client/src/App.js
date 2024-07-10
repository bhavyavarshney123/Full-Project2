import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StudentLogin from './components/StudentLogin';
import TeacherLogin from './components/TeacherLogin';
import Enroll from './components/Enroll';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard';  // Adjust path if necessary
import Preparation from './components/StudentDashboard/Preparation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/preparation" element={<Preparation />} />
        <Route path="/register-students" element={<h1>Register</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
