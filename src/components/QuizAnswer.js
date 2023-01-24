import React from "react";

export default function QuizAnswer(props) {
  let style;
  if (props.counting) {
    if (props.identity) style = { backgroundColor: "#94D7A2" };
    if (props.isHeld && !props.identity)
      style = { backgroundColor: "#F8BCBC", opacity: 0.5 };
    if (!props.isHeld && !props.identity) style = { opacity: 0.5 };
  } else {
    if (props.isHeld) style = { backgroundColor: "#4D5B9E" };
    else style = { backgroundColor: "white" };
  }

  return (
    <div className="answer" onClick={props.holdAnswer} style={style}>
      {props.value}
    </div>
  );
}
