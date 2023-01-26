import React from "react";

// Style
import "./App.scss";

// Components
import HeadChat from "./components/headCat/HeadChat";
import ChatBox from "./components/chatBox/ChatBox";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <HeadChat placeHolder="Start a discussion" />
        <ChatBox />
      </div>
    </div>
  );
};

export default App;
