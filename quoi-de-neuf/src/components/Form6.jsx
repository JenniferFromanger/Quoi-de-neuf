import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";

export default function Form6() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>Smoked any cigarette ?</p>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_SMOKE", answer: true, points: -20 })
        }
      >
        YES
      </button>
      <button
        className="no"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_SMOKE", answer: true, points: 20 })
        }
      >
        NO
      </button>
    </div>
  );
}
