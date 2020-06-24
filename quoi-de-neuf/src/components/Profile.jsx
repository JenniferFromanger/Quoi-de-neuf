import React, { useState } from "react";

export default function Profile() {
  const [avatarLevel, setAvatarLevel] = useState("Internationnal Rock Star");
  const [avatarComment, setAvatarComment] = useState(
    "'I won't be a Rock Star. I will be a Legend': Freddie Mercury,"
  );
  return (
    <div>
      <img src="./avatar1.png" alt="avatar rock" />
      <h1>{avatarLevel} </h1>
      <h2>{avatarComment}</h2>
      <div>
        <p>Past Points</p>
        <img src="" alt="button to your past points" />
      </div>
      <div>
        <p>How was your day?</p>
        <img src="" alt="button to your day information" />
      </div>
    </div>
  );
}
