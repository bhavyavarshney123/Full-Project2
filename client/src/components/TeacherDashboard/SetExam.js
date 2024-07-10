import React, { useState } from 'react';
import axios from 'axios';

const SetExam = () => {
    const [examDetails, setExamDetails] = useState({
        departmentName: '', courseName: '', subjectName: '', examName: '', semesterNo: '', numOfQuestions: '', questions: []
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setExamDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addQuestion = () => {
        setExamDetails(prevState => ({
            ...prevState,
            questions: [...prevState.questions, { question: '', options: [], answer: '' }]
        }));
    };

    const handleQuestionChange = (index, e) => {
        const { name, value } = e.target;
        const updatedQuestions = examDetails.questions.map((question, qIndex) => (
            qIndex === index ? { ...question, [name]: value } : question
        ));
        setExamDetails(prevState => ({ ...prevState, questions: updatedQuestions }));
    };

    const handleOptionChange = (qIndex, oIndex, e) => {
        const { value } = e.target;
        const updatedQuestions = examDetails.questions.map((question, questionIndex) => (
            questionIndex === qIndex ? {
                ...question,
                options: question.options.map((option, optionIndex) => (
                    optionIndex === oIndex ? value : option
                ))
            } : question
        ));
        setExamDetails(prevState => ({ ...prevState, questions: updatedQuestions }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/exams/set', examDetails);
            console.log(response.data);
            // Show a success message or redirect
            alert('Exam set successfully');
        } catch (error) {
            console.error(error);
            // Show an error message
            alert('Failed to set exam');
        }
    };

    return (
        <div>
            <h1>Set Exam</h1>
            <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
                <input
                    type="text"
                    name="departmentName"
                    placeholder="Department Name"
                    value={examDetails.departmentName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="courseName"
                    placeholder="Course Name"
                    value={examDetails.courseName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subjectName"
                    placeholder="Subject Name"
                    value={examDetails.subjectName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="examName"
                    placeholder="Exam Name"
                    value={examDetails.examName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="semesterNo"
                    placeholder="Semester No"
                    value={examDetails.semesterNo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="numOfQuestions"
                    placeholder="Number of Questions"
                    value={examDetails.numOfQuestions}
                    onChange={handleChange}
                    required
                />
                <button type="button" onClick={addQuestion}>Add Question</button>
                {examDetails.questions.map((question, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="question"
                            placeholder="Question"
                            value={question.question}
                            onChange={e => handleQuestionChange(index, e)}
                            required
                        />
                        {question.options.map((option, oIndex) => (
                            <input
                                key={oIndex}
                                type="text"
                                placeholder={`Option ${oIndex + 1}`}
                                value={option}
                                onChange={e => handleOptionChange(index, oIndex, e)}
                                required
                            />
                        ))}
                        <input
                            type="text"
                            name="answer"
                            placeholder="Answer"
                            value={question.answer}
                            onChange={e => handleQuestionChange(index, e)}
                            required
                        />
                    </div>
                ))}
                <button type="submit">Set Exam</button>
            </form>
        </div>
    );
};

export default SetExam;
