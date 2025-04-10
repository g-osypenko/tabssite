import React from "react";
import TabField from "./TabField";
import "./TabEditor.css";

const TabEditor = () => {
  return (
    <main className="tab-editor">
      <div className="tab-container">
        <TabField />
      </div>
    </main>
  );
};

export default TabEditor;