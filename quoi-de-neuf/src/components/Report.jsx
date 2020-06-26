import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Report.scss";

export default function Report() {
  const score = useSelector((state) => state.score);

  let countPoint = [240.0, 230.0, 290.0, 130.0, 100.0, 200.0, score];

  const totalPoint = countPoint.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  let printDays = [];
  for (let i = 6; i >= 0; i--) {
    printDays.push(moment().subtract(i, "days").format("L"));
  }

  let printPTS = ["PTS", "PTS", "PTS", "PTS", "PTS", "PTS", "PTS"];

  const pointLeft = 2000 - totalPoint;

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
            Still <span className="ptlefts">{pointLeft} points</span> left to
            be:
          </h2>
          <p className="NextTitle">International RockStar</p>
        </div>
        <div className="avatarnext">
          <img
            src="./avatar3.png"
            alt="avatar international RockStar"
            width="120px"
          />
          <p>2000 PTS</p>
        </div>
      </div>
      <h2 className="separate">- - - - - - - - - - - - - - - - -</h2>
      <div className="historic">
        <h3>Past Points</h3>
        <div className="Liste">
          <ul className="Date">
            {printDays.map((day, i) => (
              <li key={i}>{day}</li>
            ))}
          </ul>
            <ul className="SousListePoint">
              {countPoint.map((num, i) => (
                <li key={i}>{num}</li>
              ))}
            </ul>
            <ul className="SousListePoint">
              {printPTS.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
        </div>
        <p>Total Points {totalPoint} PTS</p>
      </div>
      <Link to="/Profile">
        <p>Back to profile</p>
      </Link>
    </div>
  );
}
