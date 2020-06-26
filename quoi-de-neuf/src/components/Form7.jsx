import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Form7() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <div>
        <img src="/liquor.png" alt="alcohol bottle" />
      </div>
      <div className="questions">
        <p>Drunk any alcohool ?</p>
        <Link to="/Report">
          <button
            className="yes"
            type="button"
            onClick={() =>
              dispatch({ type: "ANSWER_DRINK", answer: true, points: -10 })
            }
          >
            YES
          </button>
          <button
            className="no"
            type="button"
            onClick={() =>
              dispatch({ type: "ANSWER_DRINK", answer: false, points: 50 })
            }
          >
            NO
          </button>
        </Link>
      </div>
    </div>
  );
}
