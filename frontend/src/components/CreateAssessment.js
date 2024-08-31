import React, { useState } from 'react';

const CreateAssessment = () => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('quiz');
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { type: 'MCQ', content: '', options: [], correct_answer: '' }]);
  };

  const handleSaveAssessment = () => {
    fetch('/api/assessments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, type, questions }),
    }).then((res) => res.json()).then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Create New Assessment</h1>
      <input 
        type="text" 
        placeholder="Assessment Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="quiz">Quiz</option>
        <option value="assignment">Assignment</option>
        <option value="survey">Survey</option>
      </select>

      {questions.map((question, index) => (
        <div key={index}>
          <textarea 
            placeholder="Question Content" 
            value={question.content} 
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].content = e.target.value;
              setQuestions(newQuestions);
            }} 
          />
          {/* Options and Correct Answer Fields */}
        </div>
      ))}

      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={handleSaveAssessment}>Save Assessment</button>
    </div>
  );
};

export default CreateAssessment;
