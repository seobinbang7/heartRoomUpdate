import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css";

export default function Chat() {
  return (
    <>
      <FontAwesomeIcon className="chat" icon={faComments} size="7x" />
    </>
  );
}
