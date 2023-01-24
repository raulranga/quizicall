import React from "react";
import "./App.css";
import StartingPage from "./components/StartingPage";
import QuizPage from "./components/QuizPage";

function App() {
  const [startQuiz, setStartQuiz] = React.useState(false);

  const style = {
    backgroundSize: !startQuiz ? "297px 235px" : "297px 235px, 201px 142px ",
  };

  return (
    <div className="App" style={style}>
      {!startQuiz ? (
        <StartingPage startQuiz={() => setStartQuiz(true)} />
      ) : (
        <QuizPage newQuiz={() => setStartQuiz(false)} />
      )}
    </div>
  );
}

export default App;
