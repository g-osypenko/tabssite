import React from "react";
import "./TabBox.css";

const TabBox = ({ value, onChange }) => {
  const handleInput = (e) => {
    const newValue = e.target.innerText;
    onChange(newValue);
  };

  return (
    <div
      className="tab-box"
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      onInput={handleInput}
    >
      {value}
    </div>
  );
};

export default TabBox;
