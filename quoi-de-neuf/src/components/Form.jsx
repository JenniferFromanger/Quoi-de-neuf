import React from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const hasEatenVegetables = useSelector((state) => state.vegetablesToday);

  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>Have you eaten vegetables today ?</p>

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
        disabled={hasEatenVegetables && "disabled"}
      >
        YES {score}
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
        disabled={!hasEatenVegetables && "disabled"}
      >
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
