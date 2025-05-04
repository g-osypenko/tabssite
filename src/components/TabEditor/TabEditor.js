import React from "react";
import TabField from "./TabField";
import "./TabEditor.css";

const TabEditor = ({ isPlaying }) => {
  return (
    <main className="tab-editor">
      <div className="tab-container">
        <TabField isPlaying={isPlaying} />
      </div>
    </main>
  );
};

export default TabEditor;
