import React from "react";

// Components
import UserText from "./UserText";

// API
import { discussions } from "../../shared/discussions";

const ChatBox = () => {
  return (
    <div>
      {discussions.map((discussion) => (
        <UserText key={discussion.id} data={discussion} />
      ))}
    </div>
  );
};

export default ChatBox;
