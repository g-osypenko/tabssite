import React, { useEffect } from "react";
import "./TabBox.css";

const COLUMN_WIDTH = 50;
const LINE_HEIGHT = 24;

const TabBox = ({ row, col, value, onChange, onSelect }) => {
  const note = value?.note ?? "";

  const handleChange = (e) => {
    onChange({
      ...value,
      note: e.target.value,
      duration: value?.duration || "4n"
    });
  };

  const handleKeyDown = (e) => {
    const hotkeys = ['q', 'w', 'e', 'r', 't', 'y'];
    if (hotkeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <input
      className="tab-box"
      style={{
        left: `${col * COLUMN_WIDTH}px`,
        top: `${row * LINE_HEIGHT - 10}px`,
      }}
      value={note}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      maxLength={2}
      onFocus={() => onSelect(row, col)}
    />
  );
};

export default TabBox;