import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import { useState } from 'react';
import ThanksForPlaying from './components/ThanksForPlaying';

function App() {
  const questions = [
    {
      question: 'Which of these is a JavaScript library?',
      choices: ['Vue', 'Flask', 'Rails', 'Cargo'],
      answer: 'Vue',
    },
    {
      question: 'Which of these is owned by Microsoft?',
      choices: ['Instagram', 'VSCode', 'GCP', 'Space X'],
      answer: 'VSCode',
    },
    {
      question: 'How many bytes are in one kilobyte?',

      choices: ['1000', '1023', '1024', '1032'],
      answer: '1024',
    },
    {
      question: 'When was the first iPhone released?',
      choices: ['2008', '2007', '2006', '2005'],
      answer: '2007',
    },
    {
      question:
        'How long did it take ChatGPT to get its first 100 million users?',
      choices: ['One year', 'Six months', 'Three months', 'Two months'],
      answer: 'Two months',
    },
  ];

  const [index, setIndex] = useState(0);
  const [displayQuestion, setDisplayQuestion] = useState(questions[index]);
  const [score, setScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(null);
  const [finished, setFinished] = useState(false);

  function handleSelectedChoice(e) {
    e.preventDefault();

    console.log(e.target.value);
    console.log(index);
    if (index < questions.length - 1) {
      let temp = index + 1;
      setIndex(temp);
      setDisplayQuestion(questions[temp]);
    } else {
      setFinished(true);
    }

    if (e.target.value === questions[index].answer) {
      setScore(score + 5);
    }
  }

  function handleGameOver() {
    setPreviousScore(score);
    setIndex(0);
    setDisplayQuestion(questions[0]);
    setScore(0);
    setFinished(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A quiz game</p>
      </header>

      {/* Game Content */}
      <main>
        <h1>Your score: {score}</h1>
        {previousScore && <h2>Previous score: {previousScore}</h2>}

        {finished ? (
          <ThanksForPlaying onClick={handleGameOver} />
        ) : (
          <Question
            question={displayQuestion.question}
            choices={displayQuestion.choices}
            onClick={handleSelectedChoice}
          />
        )}
      </main>
    </div>
  );
}

export default App;
