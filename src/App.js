import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A quiz game</p>
      </header>

      {/* Game Content */}
      <main>
        <h1>Welcome to the quiz!</h1>
        {questions.map((question) => (
          <Question question={question.question} options={question.choices} />
        ))}
      </main>
    </div>
  );
}

export default App;
