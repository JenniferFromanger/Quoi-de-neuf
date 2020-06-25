import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Report() {
  const score = useSelector((state) => state.score);
  let countPoint = [score, 23, 52, 3, 0, 20, 52];

  const totalPoint = countPoint.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let printDays = [];
  for (let i = 6; i >= 0; i--) {
    printDays.push(
      moment().subtract(i, "days").format("L"),
      countPoint[i],
      "PTS"
    );
  }

  return (
    <div>
      <div>
        <h1>Total Today</h1>
        <p>{score} PTS</p>
      </div>
      <div>
        <h2>Your Rewards</h2>
        <img src="" alt="place de concert" />
        <img src="" alt="place de concert" />
      </div>
      <div>
        <h2>Still 7 points left to be</h2>
        <p>Internationnal RockStar</p>
        <img src="./avatar3.png" alt="avatar internationnal RockStar" />
      </div>
      <div>
        <h2>Past Points</h2>
        <ul>
          {printDays.map((day, i) => (
            <li key={i}>{day}</li>
          ))}
        </ul>
        <p>Total Points {totalPoint} PTS</p>
      </div>
      <Link to="/Profile">
        <p>Back to profile</p>
      </Link>
    </div>
  );
}
