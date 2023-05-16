import React from "react";
import "./Main.css";
import "../MusicList/MusicList.css";
import Heart from "../Heart/Heart";
import Mark from "../Mark/Mark";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Chat from "../Chat/Chat";

export default function Main() {
  return (
    <div className="container">
      <header>
        <AudioPlayer />
      </header>
      <main>
        <Mark />
        <Heart />
        <Chat />
      </main>
    </div>
  );
}
