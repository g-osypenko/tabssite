import React, { useState } from 'react';
import './TabInput.css';

const TabInput = () => {
  const [tabData, setTabData] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
  });

  const handleInputChange = (e, lineNumber) => {
    const value = e.target.innerText;
    setTabData((prevData) => ({
      ...prevData,
      [lineNumber]: value,
    }));
  };

  return (
    <div className="tab-input">
      <div className="tabs-wrapper">
        <div className="strings">
          <div className="svg-strings">
            <svg width="30px" height="180px">
            <text x="0" y="20" fontSize="16" fill="#888888" pointerEvents="none">E</text>
            <text x="0" y="40" fontSize="16" fill="#888888" pointerEvents="none">B</text>
            <text x="0" y="60" fontSize="16" fill="#888888" pointerEvents="none">G</text>
            <text x="0" y="80" fontSize="16" fill="#888888" pointerEvents="none">D</text>
            <text x="0" y="100" fontSize="16" fill="#888888" pointerEvents="none">A</text>
            <text x="0" y="120" fontSize="16" fill="#888888" pointerEvents="none">E</text>
            </svg>
          </div>
        </div>
        <div className="tabs-container">
          {[1, 2, 3, 4, 5, 6].map((lineNumber) => (
            <div
              key={lineNumber}
              className="tab-line"
              contentEditable
              suppressContentEditableWarning
              onInput={(e) => handleInputChange(e, lineNumber)}
              placeholder={`Струна ${lineNumber}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabInput;
