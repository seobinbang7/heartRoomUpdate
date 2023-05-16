import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import "./AudioPlayer.css";

export default function AudioPlayer() {
  const audioRef = useRef(); // audio element에 대한 ref
  const titleRef = useRef();
  const [isPlayVisible, setPlayVisible] = useState(true);
  const [isStopVisible, setStopVisible] = useState(false);
  const [currentSong, setCurrentSong] = useState(""); // 현재 노래
  const [currentSongIndex, setCurrentSongIndex] = useState(-1); // 현재 노래의 인덱스

  const [songs] = useState(["./music/1.mp3", "./music/2.mp3", "./music/3.mp3"]); // 노래 파일들
  const [musicList] = useState([
    "Zac Nelson - Step into Success",
    "Wonderland - Horizons",
    "Flint - I Just Wanna Have Fun",
  ]);

  // 새로운 노래를 재생하는 함수
  const playNewSong = () => {
    setPlayVisible(false);
    setStopVisible(true);
    const newSongIndex = Math.floor(Math.random() * songs.length);
    setCurrentSong(songs[newSongIndex]);
    setCurrentSongIndex(newSongIndex);
    if (titleRef.current) {
      titleRef.current.innerHTML = musicList[newSongIndex] + " 재생중..";
    }
  };

  // currentSong이 바뀔 때마다 audio element를 업데이트하고 노래를 재생
  useEffect(() => {
    if (currentSong !== "") {
      audioRef.current.src = currentSong;
      audioRef.current
        .play()
        .catch((error) => console.log("Play interrupted:", error));
    }
  }, [currentSong]);

  function handlePause() {
    setPlayVisible(true);
    setStopVisible(false);
    audioRef.current.pause();
    titleRef.current.innerHTML = "";
  }
  return (
    <>
      <audio ref={audioRef} loop>
        <source src={currentSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {currentSongIndex !== -1 && (
        <div className="music-title">
          <div className="track">
            <div className="content" ref={titleRef}>
              {currentSongIndex !== -1 &&
                `${musicList[currentSongIndex]} 재생중..`}
            </div>
          </div>
        </div>
      )}
      {isPlayVisible && (
        <FontAwesomeIcon
          id="play"
          className="volumeUp"
          icon={faVolumeUp}
          size="2x"
          flip="horizontal"
          onClick={playNewSong}
        />
      )}
      {isStopVisible && (
        <FontAwesomeIcon
          id="stop"
          className="volumeOff"
          icon={faVolumeOff}
          size="2x"
          flip="horizontal"
          onClick={handlePause}
        />
      )}
    </>
  );
}
