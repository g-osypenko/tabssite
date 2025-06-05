import React from 'react';
import metronome from '../../Images/metronome.svg';
import metronome1 from '../../Images/metronome1.svg';
import metronome2 from '../../Images/metronome2.svg';
import metronome3 from '../../Images/metronome3.svg';

const images = [metronome, metronome1, metronome2, metronome3];

const MetronomeButton = ({ index, onClick }) => {
  return (
    <button className="metronomeButton" onClick={onClick}>
      <img src={images[index]} alt="Metronome" />
    </button>
  );
};

export default MetronomeButton;