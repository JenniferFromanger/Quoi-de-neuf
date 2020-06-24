import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function PastPoints() {
  const today = new Date();
  const formatToday = moment(today).format("L");

  let countPoint = [23, 52, 3, 0, 20, 52, 4];

  const totalPoint = countPoint.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let printDays = [];
  for (let i = 7; i > 0; i--) {
    printDays.push(
      moment().subtract(i, "days").format("L"),
      countPoint[i - 1],
      "PTS"
    );
  }

  console.log(printDays);
  return (
    <div>
      <div>
        <p>{formatToday}</p>
        <h1>{totalPoint} Points</h1>
      </div>
      <div>
        <ul>
          {printDays.map((day, i) => (
            <li key={i}>{day}</li>
          ))}
        </ul>
      </div>
      <Link to="/Profile">
        <p>Back to profile</p>
      </Link>
    </div>
  );
}
