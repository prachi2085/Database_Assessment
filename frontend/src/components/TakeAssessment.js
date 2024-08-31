import React, { useState, useEffect } from 'react';

const TakeAssessment = ({ assessmentId }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch(`/api/assessments/${assessmentId}/questions`)
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, [assessmentId]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    fetch('/api/assessments/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ assessmentId, answers }),
    }).then(res => res.json()).then(data => console.log(data));
  };

  return (
    <div>
      <h1>Take Assessment</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.content}</p>
          {/* Answer Input Field */}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TakeAssessment;
