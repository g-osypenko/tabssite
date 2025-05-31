import React, { useEffect, useState } from "react";
import TabField from "./TabField";
import TabPlayer from "../audio/TabPlayer";
import "./TabEditor.css";

const TabEditor = ({ isPlaying, tabData, onTabDataChange, setSelectedCell }) => {
  const [bpm, setBpm] = useState(120);

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

  return (
    <main className="tab-editor">
      <div className="tab-container">
        <TabField
          tabData={tabData}
          onTabDataChange={onTabDataChange}
          bpm={bpm}
          isPlaying={isPlaying}
          onSelect={(row, col) => setSelectedCell({ row, col })}
        />
        <TabPlayer
          isPlaying={isPlaying}
          tabData={tabData}
          bpm={bpm}
        />
      </div>
    </main>
  );
};

export default TabEditor;