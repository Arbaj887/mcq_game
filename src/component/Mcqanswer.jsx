import React, { useEffect, useState } from 'react';
import QuestionApi from '../QuestionApi.json';
import { useNavigate } from 'react-router-dom';

function Mcqanswer() {
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.length === 0) {
            return navigate('/');
        } else {
            // Calculate score
            let initialScore = 0;
            QuestionApi.forEach((item, index) => {
                const selectedOption = sessionStorage.getItem(`option${index}`);
                if (selectedOption === item.answer) {
                    initialScore += 1;
                }
            });
            setScore(initialScore);
        }
    }, [navigate]);

    const reStart =(e)=>{
        e.preventDefault();
        sessionStorage.clear();
        navigate('/')

    }

    return (
        <div>
            <h2 style={{ position: 'relative', left: '30px' }}>Score: {score}/10</h2>
            {QuestionApi.map((item, index) => {
                const selectedOption = sessionStorage.getItem(`option${index}`);
                console.log(selectedOption)
                console.log(item.answer)
                return (
                    <div key={index} className='answer'>
                        <h3>{item.question}</h3>
                        <label className={selectedOption === item.option1 ? (item.option1 === item.answer ? 'correct-answer' : 'incorrect-answer') : ''}>
                            <input type='radio' checked={item.option1 === selectedOption} readOnly />
                            {item.option1}
                        </label>
                        <br />
                        <label className={selectedOption === item.option2 ? (item.option2 === item.answer ? 'correct-answer' : 'incorrect-answer') : ''}>
                            <input type='radio' checked={item.option2 === selectedOption} readOnly />
                            {item.option2}
                        </label>
                        <br />
                        <label className={selectedOption === item.option3 ? (item.option3 === item.answer ? 'correct-answer' : 'incorrect-answer') : ''}>
                            <input type='radio' checked={item.option3 === selectedOption} readOnly />
                            {item.option3}
                        </label>
                        <br />
                        <label className={selectedOption === item.option4 ? (item.option4 === item.answer ? 'correct-answer' : 'incorrect-answer') : ''}>
                            <input type='radio' checked={item.option4 === selectedOption} readOnly />
                            {item.option4}
                        </label>
                        <br />
                        <b>Correct Answer: <p>{item.answer}</p></b>
                        <br />
                        <b>Explanation: <p>{item.explanation}</p></b>
                        <br />
                    </div>
                );
            })}
            <div className='answer'>
                <button onClick={reStart}>
                    Restart
                </button>
            </div>
        </div>
    );
}

export default Mcqanswer;
