import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";
import { useSelector } from "react-redux";

export default function Profile() {
  const totalPoint = useSelector((state) => state.totalPoint);
  const [avatarLevel, setAvatarLevel] = useState("Rock Star Wannabe");
  const [avatarQuote, setAvatarQuote] = useState(
    "'I won't be a Rock Star. I will be a Legend' - Freddie Mercury"
  );
  const setNewLevel = () => {
    setAvatarLevel("International RockStar");
    setAvatarQuote(
      "I didn't know how to deal with success. If there was a Rock Star 101, I would have liked to take it. It might have helped me. Kurt Cobain"
    );
  };
  return (
    <div className="profile ">
      <h1>{avatarLevel}</h1>
      <img src="./avatar1.png" alt="avatar rock" width="200px" />

      <p className="quote">{totalPoint < 2000 ? avatarQuote : setNewLevel}</p>

      <div className="button-profil">
        <div>
          <Link to="/Report">
            <button src="" alt="button to your past points" className="shine">
              MY REPORT
            </button>
          </Link>
        </div>
        <div>
          <Link to="/Form/1">
            <button src="" alt="button to your past points">
              HOW WAS YOUR DAY?
            </button>
          </Link>
        </div>
      </div>

      <div>
        <img src="fire.png" width="30px" alt="FIIIIIIRREEEEEEEEEEEE" />
      </div>
    </div>
  );
}
