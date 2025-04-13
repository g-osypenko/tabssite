import React, { useState } from 'react';
import './TabHeader.css';
import PlayButton from './Buttons/PlayButton';
import MetronomeButton from './Buttons/MetronomeButton';
import SpeedInput from './Buttons/SpeedInput';
import BpmInput from './Buttons/BpmInput';
import TimeSignatureInput from './Buttons/TimeSignatureInput';

const TabHeader = () => {
  const [metronomeIndex, setMetronomeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeSignature, setTimeSignature] = useState('4/4');

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const handleTimeSignatureChange = (e) => {
    setTimeSignature(e.target.value);
  };

  const isValidTimeSignature = (value) => {
    const regex = /^([1-9][0-9]*)\/(2|4|8|16)$/;
    return regex.test(value);
  };


  const handleMetronomeClick = () => {
    setMetronomeIndex(prev => (prev + 1) % 4); 
  };

  return (
    <header className="tab-header">
      <div className="tab-header-buttons">
        <TimeSignatureInput value={timeSignature} onChange={handleTimeSignatureChange} isValid={isValidTimeSignature(timeSignature)} />
        <BpmInput />
        <SpeedInput />
        <PlayButton isPlaying={isPlaying} togglePlay={togglePlay} />
        <MetronomeButton index={metronomeIndex} onClick={handleMetronomeClick} />
      </div>
    </header>
  );
};

export default TabHeader;
