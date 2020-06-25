import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Form3() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>Any sweets (cake chocolates...) ?</p>
      <Link to="/Form/4">
        <button
          className="yes"
          type="button"
          onClick={() =>
            dispatch({ type: "ANSWER_SWEET", answer: true, points: -10 })
          }
        >
          YES
        </button>
        <button
          className="no"
          type="button"
          onClick={() =>
            dispatch({ type: "ANSWER_SWEET", answer: true, points: 50 })
          }
        >
          NO
        </button>
      </Link>
    </div>
  );
}
