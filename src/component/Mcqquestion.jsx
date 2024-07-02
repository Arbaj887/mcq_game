import React, { useState, useEffect } from 'react';
import QuestionApi from '../QuestionApi.json';
import { Link } from 'react-router-dom';

function Mcqquestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Load previously selected option from sessionStorage if available
    const storedOption = sessionStorage.getItem(`option${currentQuestion}`);
    if (storedOption !== null) {
      setSelectedOption(storedOption);
    }
  }, [currentQuestion]); 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    sessionStorage.setItem(`option${currentQuestion}`, event.target.value);
  };

  const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedOption(null); 
  };

  const prevQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    setSelectedOption(null); 
  };

  return (
    <div className='question'>
      <h3>{QuestionApi[currentQuestion].question}</h3>
      <input
        type='radio'
        value={QuestionApi[currentQuestion].option1}
        checked={selectedOption === QuestionApi[currentQuestion].option1}
        onChange={handleOptionChange}
        name={`option${currentQuestion}`}
        
      />
      <label>{QuestionApi[currentQuestion].option1}</label>
      <br />
      <input
        type='radio'
        value={QuestionApi[currentQuestion].option2}
        checked={selectedOption === QuestionApi[currentQuestion].option2}
        onChange={handleOptionChange}
        name={`option${currentQuestion}`}
        
      />
      <label>{QuestionApi[currentQuestion].option2}</label>
      <br />
      <input
        type='radio'
        value={QuestionApi[currentQuestion].option3}
        checked={selectedOption === QuestionApi[currentQuestion].option3}
        onChange={handleOptionChange}
        name={`option${currentQuestion}`}
       
      />
      <label>{QuestionApi[currentQuestion].option3}</label>
      <br />
      <input
        type='radio'
        value={QuestionApi[currentQuestion].option4}
        checked={selectedOption === QuestionApi[currentQuestion].option4}
        onChange={handleOptionChange}
        name={`option${currentQuestion}`}
       
      />
      <label>{QuestionApi[currentQuestion].option4}</label>
      <br />

      {/* ---Navigation buttons-----*/}
      <button onClick={prevQuestion} disabled={currentQuestion === 0}>
        Previous
      </button>
      <button onClick={nextQuestion} disabled={currentQuestion === QuestionApi.length - 1}>
        Next
      </button>
      <Link to={'/mcqanswer'}>
      <button disabled={currentQuestion <= 8 } on>
        Submit
      </button>
      </Link>
    </div>
  );
}

export default Mcqquestion;
