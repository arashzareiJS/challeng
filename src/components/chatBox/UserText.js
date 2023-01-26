import React from "react";

// Style
import "./UsersText.scss";

// Icon
import { AiFillLike } from "react-icons/ai";

// Components
import Replies from "./Replies";

const UserText = ({ data }) => {
  const {
    iLikedIt,
    likes,
    text,
    replies,
    user: { name, avatar },
  } = data;

  return (
    <div className="bodyChat">
      <div className="Profile">
        {avatar ? (
          <img src={avatar} className="Avatar" />
        ) : (
          <span className="Avatar noneProfile">{name[0]}</span>
        )}
        <span className="borderLine"></span>
      </div>
      <div className="Chats">
        <div className="UserName-time">
          <p className="UserName">{name}</p>
          <p className="Time">3h ago</p>
        </div>
        <p className="text">{text}</p>
        <div className="like-reply">
          <span className={`btnLike ${iLikedIt ? "liked" : "disLiked"}`}>
            <AiFillLike />
            {likes}
          </span>
          <span className="reply">Reply</span>
        </div>
        {replies.map((reply) => (
          <Replies key={reply.id} data={reply} />
        ))}
        {replies.length > 0 && (
          <div className="AddReply">
            <img src={avatar} alt="avatar" />
            <input className="inputReply" type="text" placeholder="Reply" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserText;
