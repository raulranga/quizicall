import React from "react";
import { nanoid } from "nanoid";
import QuizElement from "./QuizElement";
import CheckAnswersBtn from "./CheckAnswersBtn";
import PlayAgainBtn from "./PlayAgainBtn";

export default function QuizPage(props) {
  const [Quiz, setQuiz] = React.useState([]);
  const [countAnswers, setCountAnswers] = React.useState({
    correctAnswers: 0,
    count: false,
  });

  React.useEffect(() => {
    async function getQuiz() {
      const res = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await res.json();
      const quiz = data.results.map((res) => {
        const id = nanoid();
        return { ...res, id: id };
      });
      setQuiz(quiz);
    }
    getQuiz();
  }, []);

  const QuizContainer = Quiz.map((q) => (
    <QuizElement
      key={q.id}
      question={q.question}
      correct_answer={q.correct_answer}
      incorrect_answers={q.incorrect_answers}
      answers={q.answers}
      countAnswers={countAnswers}
      setCountAnswers={setCountAnswers}
    />
  ));
  return (
    <div className="quiz-page">
      <div className="quiz-container">{QuizContainer}</div>
      {!countAnswers.count ? (
        <CheckAnswersBtn setCountAnswers={setCountAnswers} />
      ) : (
        <PlayAgainBtn
          correctAnswers={countAnswers.correctAnswers}
          newQuiz={props.newQuiz}
        />
      )}
    </div>
  );
}
