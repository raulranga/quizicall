export default function PlayAgainBtn(props) {
  console.log(props.correctAnswers);
  return (
    <div className="play-again">
      <p className="correct-answers-text">
        You scored correct {props.correctAnswers}/5 answers
      </p>
      <button className="btn btn--play-again" onClick={props.newQuiz}>
        Play again
      </button>
    </div>
  );
}
