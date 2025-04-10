import React from "react";
import TabBox from "./TabBox";
import "./TabRow.css";

const TabRow = ({ rowData, onUpdateBox }) => {
  return (
    <div className="tab-row">
      {rowData.map((value, colIndex) => (
        <TabBox
          key={colIndex}
          value={value}
          onChange={(newValue) => onUpdateBox(colIndex, newValue)}
        />
      ))}
    </div>
  );
};

export default TabRow;
