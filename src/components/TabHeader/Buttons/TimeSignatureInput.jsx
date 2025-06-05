import React from 'react';

const TimeSignatureInput = ({ value, onChange, isValid }) => (
  <div className={`speed-control time-signature-control ${isValid ? '' : 'invalid'}`}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="4/4"
    />
  </div>
);

export default TimeSignatureInput;
