import React from "react";
import "./Form.scss";

function Form() {
  return (
    <div className="form">
      <div className="form-header">
        <h1>MY DAILY CHECK-UP</h1>
      </div>
      <p>Have you eaten vegetables today ?</p>

      <button className="yes" type="button">
        YES
      </button>
      <button className="no" type="button">
        NO
      </button>

      <p>Slow burning carbohydrates ?</p>

      <button className="yes" type="button">
        YES
      </button>
      <button className="no" type="button">
        NO
      </button>
      <p>Any sweets ?</p>

      <button className="yes" type="button">
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
