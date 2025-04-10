import React from 'react';

const BpmInput = () => (
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
);

export default BpmInput;
