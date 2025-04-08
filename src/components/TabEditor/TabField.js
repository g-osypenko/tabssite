
import React, { useState } from "react";
import "./TabField.css";
import TabRow from "./TabRow";

const TabField = () => {
  const [tabData, setTabData] = useState(
    Array(6).fill([{ id: 0, value: "" }])
  );

  const handleChange = (stringIndex, boxIndex, newValue) => {
    const updatedRow = [...tabData[stringIndex]];
    updatedRow[boxIndex].value = newValue;

    // Додати новий box якщо останній не порожній
    if (
      boxIndex === updatedRow.length - 1 &&
      newValue !== ""
    ) {
      updatedRow.push({ id: Date.now(), value: "" });
    }

    const updatedTab = [...tabData];
    updatedTab[stringIndex] = updatedRow;
    setTabData(updatedTab);
  };

  return (
    <div className="tab-field">
      {tabData.map((boxes, stringIndex) => (
        <TabRow
          key={stringIndex}
          boxes={boxes}
          stringIndex={stringIndex}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default TabField;
