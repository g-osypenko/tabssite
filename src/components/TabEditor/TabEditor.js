import React, { useState, useEffect } from "react";
import TabField from "./TabField";
import TabPlayer from "../audio/TabPlayer";
import "./TabEditor.css";

const TabEditor = ({ isPlaying }) => {
  const stringCount = 6;
  const [bpm, setBpm] = useState(120);
  const [tabData, setTabData] = useState(
    Array.from({ length: stringCount }, () => [
      { note: "", duration: "quarter" },
    ])
  );

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
          onTabDataChange={setTabData}
          bpm={bpm}
          isPlaying={isPlaying}
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
