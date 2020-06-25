import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Form5() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <div>
        <img src="/doctor.png" alt="medics" />
      </div>
      <div className="questions">
        <p>Respected your medical prescription ?</p>
        <Link to="/Form/6">
          <button
            className="yes"
            type="button"
            onClick={() =>
              dispatch({ type: "ANSWER_MEDICAL", answer: true, points: 50 })
            }
          >
            YES
          </button>
          <button
            className="no"
            type="button"
            onClick={() =>
              dispatch({ type: "ANSWER_MEDICAL", answer: true, points: -50 })
            }
          >
            NO
          </button>
        </Link>
      </div>
    </div>
  );
}
