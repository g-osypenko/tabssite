import React from "react";
import "./TabRow.css";
import TabBox from "./TabBox";

const TabRow = ({ stringIndex, boxes, onBoxChange }) => {
  return (
    <div className="tab-row">
      {boxes.map((value, boxIndex) => (
        <TabBox
          key={boxIndex}
          value={value}
          onChange={(newValue) => onBoxChange(stringIndex, boxIndex, newValue)}
        />
      ))}
    </div>
  );
};

export default TabRow;
