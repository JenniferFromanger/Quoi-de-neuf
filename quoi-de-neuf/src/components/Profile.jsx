import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";

export default function Profile() {
  const [avatarLevel, setAvatarLevel] = useState("Rock Star Wannabe");
  const [avatarComment, setAvatarComment] = useState(
    "'I won't be a Rock Star. I will be a Legend' - Freddie Mercury"
  );
  return (
    <div className="profile">
      <h1>{avatarLevel}</h1>
      <img src="./avatar1.png" alt="avatar rock" width="200px" />

      <p className="quote">{avatarComment}</p>

      <div className="button-profil">
        <div>
          <Link to="/Total-Points">
            <button src="" alt="button to your past points">
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
