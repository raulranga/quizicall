export default function CheckAnswersBtn(props) {
  return (
    <button
      className="btn btn--checkAnswers"
      onClick={() =>
        props.setCountAnswers((oldValue) => {
          return { ...oldValue, count: true };
        })
      }
    >
      Check answers
    </button>
  );
}
