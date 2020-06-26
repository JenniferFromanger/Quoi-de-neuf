import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Form2() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <div>
        <img src="/pasta.png" alt="spagetti" />
      </div>
      <div className="questions">
        <p>Did you eat carbohydrate ?</p>
        <Link to="/Form/3">
          <button
            className="yes"
            type="button"
            onClick={() =>
              dispatch({
                type: "ANSWER_CARBOHYDRATE",
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
                type: "ANSWER_CARBOHYDRATE",
                answer: false,
                points: 0,
              })
            }
          >
            NO
          </button>
        </Link>
      </div>
    </div>
  );
}
