import React from 'react';
import './TabHeader.css'; 
import metronomePIC from '../Images/metronomePIC.png';

const TabHeader = () => {
  return (
    <header className="tab-header">
      <div className="tab-header-buttons">
        <button className="play">▶</button>
        <button className="stop">⏹</button>
        <button className="metronomeButton">
        <img src={metronomePIC} alt Metronome/>
        </button>
      </div>
    </header>
  );
};

export default TabHeader;