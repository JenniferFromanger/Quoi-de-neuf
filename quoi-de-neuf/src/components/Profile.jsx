import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [avatarLevel, setAvatarLevel] = useState("Rock Star Wannabe");
  const [avatarComment, setAvatarComment] = useState(
    "'I won't be a Rock Star. I will be a Legend': Freddie Mercury,"
  );
  return (
    <div>
      <img src="./avatar1.png" alt="avatar rock" />
      <h1>{avatarLevel}</h1>
      <h2>{avatarComment}</h2>
      <div>
        <Link to="/Total-Points">
          <p>Past Points</p>
          <img src="" alt="button to your past points" />
        </Link>
      </div>
      <div>
        <p>How was your day?</p>
        <img src="" alt="button to your day information" />
      </div>
    </div>
  );
}
