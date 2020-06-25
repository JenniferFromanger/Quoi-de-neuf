import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";

export default function Form7() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>Drunk any alcohool ?</p>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_DRINK", answer: true, points: -20 })
        }
      >
        YES
      </button>
      <button
        className="no"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_DRINK", answer: true, points: 20 })
        }
      >
        NO
      </button>
    </div>
  );
}
