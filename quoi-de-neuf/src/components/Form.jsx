import React from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const answerVegetable = useSelector((state) => state.vegetableToday);
  const answerCarbohydrate = useSelector((state) => state.carbohydrateToday);
  const answerSweet = useSelector((state) => state.sweetToday);
  const answerExercice = useSelector((state) => state.exerciceToday);
  const answerMedical = useSelector((state) => state.medicalToday);
  const answerSmoke = useSelector((state) => state.smokeToday);
  const answerDrink = useSelector((state) => state.drinkToday);

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
        disabled={answerVegetable && "disabled"}
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
        disabled={answerVegetable && "disabled"}
      >
        NO
      </button>

      <p>Did you eat carbohydrate ?</p>

      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_CARBOHYDRATE", answer: true, points: 50 })
        }
        disabled={answerCarbohydrate && "disabled"}
      >
        YES
      </button>
      <button
        className="no"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_CARBOHYDRATE", answer: true, points: 0 })
        }
        disabled={answerCarbohydrate && "disabled"}
      >
        NO
      </button>
      <p>Any sweets (cake chocolates...) ?</p>

      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_SWEET", answer: true, points: -10 })
        }
        disabled={answerSweet && "disabled"}
      >
        YES
      </button>
      <button
        className="no"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_SWEET", answer: true, points: 50 })
        }
        disabled={answerSweet && "disabled"}
      >
        NO
      </button>
      <p>How long did you exercice ?</p>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 0 })
        }
        disabled={answerExercice && "disabled"}
      >
        0 min
      </button>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 30 })
        }
        disabled={answerExercice && "disabled"}
      >
        30 min
      </button>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 60 })
        }
        disabled={answerExercice && "disabled"}
      >
        1 h
      </button>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_EXERCICE", answer: true, points: 90 })
        }
        disabled={answerExercice && "disabled"}
      >
        1 h30
      </button>
      <p>Respected your medical prescription ?</p>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_MEDICAL", answer: true, points: 50 })
        }
        disabled={answerMedical && "disabled"}
      >
        YES
      </button>
      <button
        className="no"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_MEDICAL", answer: true, points: -50 })
        }
        disabled={answerMedical && "disabled"}
      >
        NO
      </button>
      <p>Smoked any cigarette ?</p>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_SMOKE", answer: true, points: -20 })
        }
        disabled={answerSmoke && "disabled"}
      >
        YES
      </button>
      <button
        className="no"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_SMOKE", answer: true, points: 20 })
        }
        disabled={answerSmoke && "disabled"}
      >
        NO
      </button>
      <p>Drunk any alcohool ?</p>
      <button
        className="yes"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_DRINK", answer: true, points: -20 })
        }
        disabled={answerDrink && "disabled"}
      >
        YES
      </button>
      <button
        className="no"
        type="button"
        onClick={() =>
          dispatch({ type: "ANSWER_DRINK", answer: true, points: 20 })
        }
        disabled={answerDrink && "disabled"}
      >
        NO
      </button>
    </div>
  );
}

export default Form;
