import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";
import "../Chat/Chat.css";
import "./Chatting.css";

export default function Chatting() {
  const socket = io("http://localhost:3000");

  const [chatOpen, setChatOpen] = useState(false);
  const handleClick = () => {
    setChatOpen(true);
  };
  const handleClickClose = () => {
    setChatOpen(false);
  };

  return (
    <>
      {!chatOpen && (
        <FontAwesomeIcon
          className="chat"
          icon={faComments}
          size="7x"
          onClick={handleClick}
        />
      )}
      {chatOpen && (
        <div className="chattingContainer">
          <button className="closeBtn" onClick={handleClickClose}>
            X
          </button>
          <ul id="chatingUi" className="chatting-box__ul"></ul>
          <div className="chattingBox">
            <input type="text" className="chattingInput" />
            <button className="sendBtn">보내기</button>
          </div>
        </div>
      )}
    </>
  );
}
