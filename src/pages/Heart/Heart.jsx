import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Heart.css";

export default function Heart() {
  return <FontAwesomeIcon icon={faHeart} className="heart animate-heartbeat" />;
}
