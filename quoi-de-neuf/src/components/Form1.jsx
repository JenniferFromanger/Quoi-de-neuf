import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>Have you eaten vegetables today ?</p>
      <Link to="/Form/2">
        <button
          className="yes"
          type="button"
          onClick={() =>
            dispatch({
              type: "ANSWER_VEGETABLE",
              answer: true,
              points: 50,
            })
          }
        >
          YES
        </button>
        <button
          className="no"
          type="button"
          onClick={() =>
            dispatch({
              type: "ANSWER_VEGETABLE",
              answer: true,
              points: 0,
            })
          }
        >
          NO
        </button>
      </Link>
    </div>
  );
}

export default Form;
