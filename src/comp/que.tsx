import React from 'react';

interface Question {
    question: string;
    answers: string[];
    correctAnswer: number;
    numQue: number;
    setnumQue: Function;
    grade: number;
    setGrade: Function;
    lenQues: number;
}

function Que(props: Question) {
    const handleAnswerClick = (selectedAnswerIndex: number) => {
        // בדוק האם התשובה הנבחרת היא התשובה הנכונה
        const isCorrectAnswer = selectedAnswerIndex === props.correctAnswer;

        // הוסף נקודות לציון אם התשובה נכונה
        if (isCorrectAnswer) {
            props.setGrade(props.grade + 33);
        }

        // העבר לשאלה הבאה
        props.setnumQue(props.numQue + 1);
        console.log(props.numQue);
        
    }
    return (
        <div>
            <div>
                <h2>{props.question}</h2>
                <ol>
                    {props.answers.map((answer, index) => (
                        <li key={index} onClick={() => handleAnswerClick(index)}>
                            {answer}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Que;
