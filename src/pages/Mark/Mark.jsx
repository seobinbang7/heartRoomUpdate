import React from "react";
import './Mark.css';

export default function Mark() {
  return (
    <div className="mark-container">
      <div className="mark-box">
        <a href="#" className="bookmark">
          <span>준비중</span>
        </a>
      </div>
      <div className="mark-box">
        <a href="#" className="bookmark">
          준비중
        </a>
      </div>
      <div className="mark-box">
        <a href="#" className="bookmark">
          준비중
        </a>
      </div>
    </div>
  );
}
