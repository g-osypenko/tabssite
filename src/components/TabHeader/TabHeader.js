import React, { useState } from 'react';
import './TabHeader.css'; 
import metronomePIC from '../Images/metronomePIC.png';
import stopPIC from '../Images/stopPIC.png';
import playPIC from '../Images/playPIC.png';

const TabHeader = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeSignature, setTimeSignature] = useState('4/4');

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const isValidTimeSignature = (value) => {
    const regex = /^([1-9][0-9]*)\/(2|4|8|16)$/;
    return regex.test(value);
  };

  const handleTimeSignatureChange = (e) => {
    setTimeSignature(e.target.value);
  };

  return (
    <header className="tab-header">
      <div className="tab-header-buttons">

        <div className={`speed-control time-signature-control ${isValidTimeSignature(timeSignature) ? '' : 'invalid'}`}>
          <input
            type="text"
            value={timeSignature}
            onChange={handleTimeSignatureChange}
            placeholder="4/4"
          />
        </div>

        <div className="speed-control bpm-control">
          <input
            type="number"
            id="bpmInput"
            min="20"
            max="300"
            defaultValue={120}
          />
          <span className="bpm-label">BPM</span>
        </div>

        <div className="speed-control">
          <input
            type="number"
            id="speedInput"
            min="0"
            defaultValue={100}
          />
          <span className="percent-label">%</span>
        </div>

        <button className="play" onClick={togglePlay}>
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
