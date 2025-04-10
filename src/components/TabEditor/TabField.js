import React, { useState } from "react";
import TabRow from "./TabRow";
import TabLinesSVG from "./TabLinesSVG";
import "./TabField.css";

const TabField = () => {
  const stringCount = 6;
  const [tabData, setTabData] = useState(
    Array.from({ length: stringCount }, () => [""])
  );

  const updateBox = (rowIndex, colIndex, newValue) => {
    setTabData((prev) => {
      const newData = prev.map((row) => [...row]);
      newData[rowIndex][colIndex] = newValue;

      if (
        colIndex === newData[rowIndex].length - 1 &&
        newValue !== ""
      ) {
        for (let i = 0; i < newData.length; i++) {
          newData[i].push("");
        }
      }

      return newData;
    });
  };

  return (
    <div className="tab-field-container">
      <TabLinesSVG columnCount={tabData[0].length} />
      <div className="tab-boxes">
        {tabData.map((row, rowIndex) => (
          <TabRow
            key={rowIndex}
            rowData={row}
            rowIndex={rowIndex}
            onUpdateBox={updateBox}
          />
        ))}
      </div>
    </div>
  );
};

export default TabField;
