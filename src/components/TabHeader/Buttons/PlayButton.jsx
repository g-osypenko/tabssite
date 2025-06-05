import React from 'react';
import playPIC from '../../Images/playPIC.SVG';
import stopPIC from '../../Images/stopPIC.SVG';

const PlayButton = ({ isPlaying, togglePlay }) => (
  <button className="play" onClick={togglePlay}>
    <img
      src={isPlaying ? stopPIC : playPIC}
      alt={isPlaying ? "Stop" : "Play"}
      className="icon"
    />
  </button>
);

export default PlayButton;
