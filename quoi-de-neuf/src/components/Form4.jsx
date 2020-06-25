import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Form4() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>How long did you exercice ?</p>
      <Link to="/Form/5">
        <button
          className="yes"
          type="button"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 30 })
          }
        >
          30 min
        </button>
        <button
          className="yes"
          type="button"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 60 })
          }
        >
          1 h
        </button>

        <button
          className="yes"
          type="button"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 90 })
          }
        >
          1 h30
        </button>
        <button
          className="no"
          type="button"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: false, points: 0 })
          }
        >
          What ?
        </button>
      </Link>
    </div>
  );
}
