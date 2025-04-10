import React from 'react';

const SpeedInput = () => (
  <div className="speed-control">
    <input
      type="number"
      id="speedInput"
      min="0"
      defaultValue={100}
    />
    <span className="percent-label">%</span>
  </div>
);

export default SpeedInput;
