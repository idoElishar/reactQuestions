import { useState } from 'react'
import Que from './comp/que'
import './App.css'
import End from './comp/End'
function App() {
  const [count, setCount] = useState(0)
  const [numQue, setnumQue] = useState(0)
  const [grade, setGrade] = useState(0)

  interface question {
    question: string,
    answers: string[],
    correctAnswer: number
  }

  const questions: question[] = [
    {
      question: 'What color is the sky on a clear day?',
      answers: ['Blue', 'Green', 'Red', 'Yellow'],
      correctAnswer: 0,
    },
    {
      question: 'How many legs does a cat have?',
      answers: ['3', '4', '6', '2'],
      correctAnswer: 1,
    },
    {
      question: 'What color is a banana?',
      answers: ['Blue', 'Green', 'Red', 'Yellow'],
      correctAnswer: 3,
    },
  ];

  return (
    <>
      <h1> click the correct answers</h1>

      {numQue < questions.length &&
        <Que key={numQue} question={questions[numQue].question} answers={questions[numQue].answers} correctAnswer={questions[numQue].correctAnswer} numQue={numQue} setnumQue={setnumQue} grade={grade} setGrade={setGrade} lenQues={questions.length} />
      }
      <End key={numQue} numQue={numQue} lenQues={questions.length} grade={grade} />

    </>
  )
}

export default App
