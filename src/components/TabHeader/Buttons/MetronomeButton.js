import React from 'react';
import metronomePIC from '../../Images/metronomePIC.png';

const MetronomeButton = () => (
  <button className="metronomeButton">
    <img src={metronomePIC} alt="Metronome" />
  </button>
);

export default MetronomeButton;
