import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Form6() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <div>
        <img src="/no-smoke.png" alt="no smoking sign" />
      </div>
      <div className="questions">
        <p>Smoked any cigarette ?</p>
        <Link to="/Form/7">
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
        </Link>
      </div>
    </div>
  );
}
