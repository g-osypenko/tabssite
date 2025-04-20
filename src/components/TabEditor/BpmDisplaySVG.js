import React from 'react';

const BpmDisplaySVG = ({ bpm }) => {
  return (
    <svg
      width="150"
      height="30"
      style={{ position: 'absolute', top: -40, left: 10, zIndex: 1 }}
    >
      <text x="0" y="20" fontSize="16" fill="#888">
        {bpm} BPM
      </text>
    </svg>
  );
};

export default BpmDisplaySVG;
