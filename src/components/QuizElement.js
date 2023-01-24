import React from "react";
import { nanoid } from "nanoid";
import QuizAnswer from "./QuizAnswer";

export default function QuizElement(props) {
  const [shuffledAnswers, setShuffledAnswers] = React.useState(
    shuffleAnswers()
  );
  React.useEffect(() => {
    let correct = false;
    let allCorrect = true;
    shuffledAnswers.forEach((a) => {
      if (a.isHeld && a.identity) correct = true;
      if (a.isHeld && !a.identity) allCorrect = false;
    });
    if (correct && allCorrect)
      props.setCountAnswers((oldValue) => {
        return { correctAnswers: oldValue.correctAnswers + 1, count: true };
      });
  }, [props.countAnswers.count]);
  console.log(props);
  function getAnswers() {
    const answers = props.incorrect_answers.map((a) => {
      const id = nanoid();

      return { value: a, id: id, isHeld: false, identity: false };
    });
    const id = nanoid();
    answers.push({
      value: props.correct_answer,
      id: id,
      isHeld: false,
      identity: true,
    });
    return answers;
  }

  function shuffleAnswers() {
    const answers = getAnswers();
    if (answers.length === 2) return answers;
    const shuffledAnswersArr = answers.sort(() => Math.random() - 0.5);
    return shuffledAnswersArr;
  }

  function holdAnswer(id) {
    if (props.countAnswers.count) return;

    setShuffledAnswers((oldValue) => {
      const newData = oldValue.map((answer) => {
        return answer.id === id
          ? { ...answer, isHeld: !answer.isHeld }
          : { ...answer };
      });
      return newData;
    });
  }

  const answersContainer = shuffledAnswers.map((answer) => {
    return (
      <QuizAnswer
        key={answer.id}
        value={answer.value}
        isHeld={answer.isHeld}
        identity={answer.identity}
        counting={props.countAnswers.count}
        holdAnswer={() => holdAnswer(answer.id)}
      />
    );
  });

  return (
    <div className="quiz">
      <p className="question">{props.question}</p>
      <div className="answers">{answersContainer}</div>
      <div className="bar"></div>
    </div>
  );
}
