export default function StartingPage(props) {
  return (
    <div className="main-page">
      <h1 className="main-title">Quizzical</h1>
      <p className="main-description">
        A quiz refers to a short test of knowledge, with question formats often
        including multiple choice, fill in the blanks, true or false and short
        answer.
      </p>
      <button className="btn-start-quiz" onClick={props.startQuiz}>
        Start quiz
      </button>
    </div>
  );
}
