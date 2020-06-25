import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Report.scss";

export default function Report() {
  const score = useSelector((state) => state.score);
  let countPoint = [score, 240.00, 230.00, 290.00, 130.00, 100.00, 200.00, 220.00];

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
    <div className="report">
      <div>
        <h1>Total Today</h1>
        <p className="score">- - - - - {score} PTS - - - - -</p>
      </div>
      <div className="tickets">
        <h2>Your Rewards</h2>
        <img src="ticket.png" alt="concert place" width="50px" />
        <img src="ticket.png" alt="concert place" width="50px" />
      </div>

      <h2 className="separate">- - - - - - - - - - - - - - - - -</h2>

      <div className="remainingpoints">
        <div className="txt">
          <h2>
            Still <span className="ptlefts">7 points</span> left to be:
          </h2>
          <p>International RockStar</p>
        </div>
        <div className="avatarnext">
          <img
            src="./avatar3.png"
            alt="avatar international RockStar"
            width="120px"
          />
        </div>
      </div>
      <h2 className="separate">- - - - - - - - - - - - - - - - -</h2>
      <div className="historic">
        <h3>Past Points</h3>
        <ul className="Liste">
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
