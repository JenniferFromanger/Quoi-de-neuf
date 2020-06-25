import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.scss";
import { Link } from "react-router-dom";
function Homepage() {
  const initialValues = { username: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues(initialValues);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
  };
  const { username, password } = values;
  return (
    <div className="Homepage">
      <img
        className="Guitare"
        src="./guitare.png"
        alt="guitare"
        width="350px"
      />
      <h1 className="RockYourHealth">Rock your health</h1>
      <div>
        <form className="Form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="Login"
            id="username"
            name="username"
            onChange={handleChange}
            value={username}
            placeholder="FreddieMercury@health.com"
            required
          ></input>
          <input
            className="Login"
            id="password"
            name="password"
            type="text"
            onChange={handleChange}
            value={password}
            placeholder="************"
            required
          ></input>
          <Link to="/Profile">
            <button className="GoButton" type="submit">
              LOG AND ROCK
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Homepage;
