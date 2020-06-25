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
        <input
          className="yes"
          type="radio"
          name="exercice"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 30 })
          }
        />
        <label htmlFor="30">30 min</label>
        <input
          className="yes"
          type="radio"
          name="exercice"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 60 })
          }
        />
        <label htmlFor="1">1 h</label>

        <input
          className="yes"
          type="radio"
          name="exercice"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 90 })
          }
        />
        <label htmlFor="1h30"> 1 h30</label>
        <input
          className="yes"
          type="radio"
          name="exercice"
          onClick={() =>
            dispatch({ type: "ANSWER_EXERCICE", answer: false, points: 0 })
          }
        />
        <label htmlFor="no">I don't practice exercice</label>
      </Link>
    </div>
  );
}
