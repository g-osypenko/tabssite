import React, { useEffect, useState } from "react";
import TabRow from "./TabRow";
import TabLinesSVG from "./TabLinesSVG";
import TuningSVG from "./TuningSVG"; 
import TimeSignatureSVG from "./TimeSignatureSVG";
import "./TabField.css";

const TabField = () => {
  const stringCount = 6;
  const [bpm, setBpm] = useState(120);
  const [tabData, setTabData] = useState(
    Array.from({ length: stringCount }, () => [""])
  );

  // Слухаємо зміни input#bpmInput
  useEffect(() => {
    const bpmInput = document.getElementById("bpmInput");
    const updateBpm = () => {
      const value = parseInt(bpmInput.value, 10);
      if (!isNaN(value)) setBpm(value);
    };

    if (bpmInput) {
      bpmInput.addEventListener("input", updateBpm);
    }

    return () => {
      if (bpmInput) {
        bpmInput.removeEventListener("input", updateBpm);
      }
    };
  }, []);

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
      <TuningSVG /> 
      <TimeSignatureSVG />
      <TabLinesSVG columnCount={tabData[0].length} bpm={bpm} />
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
