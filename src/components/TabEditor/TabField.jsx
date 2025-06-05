import React from "react";
import TabPlayer from "../audio/TabPlayer";
import TabRow from "./TabRow";
import TabLinesSVG from "./TabLinesSVG";
import TuningSVG from "./TuningSVG";
import TimeSignatureSVG from "./TimeSignatureSVG";
import "./TabField.css";

const TabField = ({ tabData, onTabDataChange, bpm, isPlaying, onSelect }) => {
  const updateBox = (rowIndex, colIndex, newValue) => {
    const newData = tabData.map((row) => [...row]);
    newData[rowIndex][colIndex] = {
      note: newValue.note,
      duration: newValue.duration || "4n"
    };

    const isLastCol = colIndex === newData[rowIndex].length - 1;
    const isNotEmpty = newValue.note && newValue.note !== "";

    if (isLastCol && isNotEmpty) {
      for (let i = 0; i < newData.length; i++) {
        newData[i].push({ note: "", duration: "4n" });
      }
    }

    onTabDataChange(newData);
  };

  return (
    <div className="tab-field-container">
      <TabPlayer isPlaying={isPlaying} bpm={bpm} tabData={tabData} />
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
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default TabField;