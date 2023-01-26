import React from "react";

// Style
import "./Replies.scss";

// Icon
import { AiFillLike } from "react-icons/ai";

const Replies = ({ data }) => {
  const {
    text,
    iLikedIt,
    likes,
    user: { name, avatar },
  } = data;

  return (
    <div className="Reply">
      <div className="ReplyAvatar">
        <img src={avatar} alt="" />
      </div>
      <div className="ReplyChats">
        <div className="ReplyName-time">
          <p className="ReplyName">{name}</p>
          <p className="ReplyTime">2h ago</p>
        </div>
        <p className="ReplyText">{text}</p>
        <span
          className={`ReplyBtnLike ${
            iLikedIt ? "Replyliked" : "ReplydisLiked"
          }`}
        >
          <AiFillLike />
          {likes}
        </span>
      </div>
    </div>
  );
};

export default Replies;
