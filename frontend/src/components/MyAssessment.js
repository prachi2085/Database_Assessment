// MyAssessments.js
import React from 'react';

const MyAssessments = () => {
  const assessments = [
    { id: 1, title: "Math Quiz", description: "Algebra and Geometry", created_at: "2024-08-28" },
    { id: 2, title: "History Test", description: "World War II", created_at: "2024-08-27" }
  ];

  return (
    <div>
      <h2>My Assessments</h2>
      <ul>
        {assessments.map(assessment => (
          <li key={assessment.id}>
            <h3>{assessment.title}</h3>
            <p>{assessment.description}</p>
            <p>Created on: {assessment.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAssessments;
