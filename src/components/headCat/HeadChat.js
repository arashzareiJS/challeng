import React from "react";

// Style
import "./headeChat.scss";

// API
import { discussions } from "../../shared/discussions";

const HeadChat = () => {
  const avatar = discussions;
  const urlAvatar = avatar[0].user.avatar;

  return (
    <div className="HeadChat">
      <img src={urlAvatar} className="Avatar" />
      <input className="addText" type="text" placeholder="Start a discussion" />
    </div>
  );
};

export default HeadChat;
