import React, { useState } from 'react';
import './TabInput.css';

const TabInput = () => {
  const [, setTabData] = useState({
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

  const stringNames = ['E', 'B', 'G', 'D', 'A', 'E']; // знизу вгору

  return (
    <div className="tab-input">
      <div className="tabs-wrapper">
        {/* Назви струн */}
        <div className="svg-strings">
          <svg width="30px" height="180px">
            {stringNames.map((note, index) => (
              <text
                key={index}
                x="10"
                y={(index * 30) + 22}
                fontSize="16"
                fill="#888888"
                pointerEvents="none"
              >
                {note}
              </text>
            ))}
          </svg>
        </div>

        {/* Рядки для табів */}
        <div className="tabs-container">
          {stringNames.map((_, index) => {
            const lineNumber = index + 1;
            return (
              <div
                key={lineNumber}
                className="tab-line"
                contentEditable
                suppressContentEditableWarning
                spellCheck={false}
                onInput={(e) => handleInputChange(e, lineNumber)}
              >
                {/* Початково можна вставити риски */}
                {/* ---|---|---|---|--- */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabInput;
