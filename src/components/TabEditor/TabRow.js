import React from "react";
import TabBox from "./TabBox";

const TabRow = ({ rowData, rowIndex, onUpdateBox }) => {
  return (
    <div style={{ display: "flex" }}>
      {rowData.map((value, colIndex) => (
        <TabBox
          key={colIndex}
          row={rowIndex}
          col={colIndex}
          value={value}
          onChange={(val) => onUpdateBox(rowIndex, colIndex, val)}
        />
      ))}
    </div>
  );
};

export default TabRow;
