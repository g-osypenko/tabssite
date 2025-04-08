import React, { useState } from 'react';
import './TabInput.css';
import TabSVG from './TabSVG'; // ⬅️ Імпорт SVG-компонента

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

  return (
    <div className="tab-input">
      <div className="tabs-wrapper">
        {/* SVG-шаблон як основа */}
        <TabSVG />

        {/* Прозорі текстові поля поверх SVG */}
        <div className="tabs-container">
          {[1, 2, 3, 4, 5, 6].map((lineNumber) => (
            <div
              key={lineNumber}
              className="tab-line"
              contentEditable
              suppressContentEditableWarning
              spellCheck={false}
              onInput={(e) => handleInputChange(e, lineNumber)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabInput;
