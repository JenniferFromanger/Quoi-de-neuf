import React from "react";
import "./Form.scss";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>Have you eaten vegetables today ?</p>

      <button
        className="yes"
        type="button"
        onClick={() => dispatch({ type: "INCREMENT50" })}
      >
        YES
      </button>
      <button className="no" type="button">
        NO
      </button>

      <p>Did you eat slow sugars</p>

      <button
        className="yes"
        type="button"
        onClick={() => dispatch({ type: "INCREMENT50" })}
      >
        YES
      </button>
      <button className="no" type="button">
        NO
      </button>
      <p>Any sweets (cake chocolates...) ?</p>

      <button
        className="yes"
        type="button"
        onClick={() => dispatch({ type: "DECREMENT10" })}
      >
        YES
      </button>
      <button className="no" type="button">
        NO
      </button>
      <p>How long did you exercice ?</p>
      <p>Respected your medical prescription ?</p>
      <button className="yes" type="button">
        YES
      </button>
      <button className="no" type="button">
        NO
      </button>
      <p>Smoked any cigarette ?</p>
      <p>Drunk any alcohool ?</p>
    </div>
  );
}

export default Form;
