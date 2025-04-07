import React, { useState } from 'react';
import './TabHeader.css'; 
import metronomePIC from '../Images/metronomePIC.png';
import stopPIC from '../Images/stopPIC.png';
import playPIC from '../Images/playPIC.png';

const TabHeader = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <header className="tab-header">
      <div className="tab-header-buttons">
        <button className="play"onClick={togglePlay}>
         <img 
            src={isPlaying ? stopPIC : playPIC} 
            alt={isPlaying ? "Stop" : "Play"} 
            className="icon"
          />
        </button>

        <button className="metronomeButton">
        <img src={metronomePIC} alt="Metronome"/>
        </button>
      </div>
    </header>
  );
};

export default TabHeader;