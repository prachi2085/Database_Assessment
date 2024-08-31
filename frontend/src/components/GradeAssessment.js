import React, { useState, useEffect } from 'react';

const GradeAssessment = ({ assessmentId }) => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch(`/api/assessments/${assessmentId}/submissions`)
      .then(res => res.json())
      .then(data => setSubmissions(data));
  }, [assessmentId]);

  const handleGradeChange = (submissionId, grade) => {
    // Update grade for submission
  };

  const handleSaveGrades = () => {
    fetch('/api/assessments/grade', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ assessmentId, submissions }),
    }).then(res => res.json()).then(data => console.log(data));
  };

  return (
    <div>
      <h1>Grade Assessment</h1>
      {submissions.map((submission) => (
        <div key={submission.id}>
          <p>{submission.answer}</p>
          <input 
            type="number" 
            value={submission.grade} 
            onChange={(e) => handleGradeChange(submission.id, e.target.value)} 
          />
        </div>
      ))}
      <button onClick={handleSaveGrades}>Save Grades</button>
    </div>
  );
};

export default GradeAssessment;
