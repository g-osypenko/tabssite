import React from "react";
import "./TabBox.css";

const COLUMN_WIDTH = 50;
const LINE_HEIGHT = 24;

const TabBox = ({ row, col, value, onChange }) => {
  return (
    <input
      className="tab-box"
      style={{
        left: `${col * COLUMN_WIDTH}px`,
        top: `${row * LINE_HEIGHT - 10}px`,
      }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={2}
    />
  );
};

export default TabBox;
