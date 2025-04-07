import React from "react";
import "./TabEditor.css";
import TabInput from "./TabInput/TabInput";

const TabEditor = () => {
  return (
    <main className="tab-editor">
      <div className="tab-container">
        <TabInput />
      </div>
    </main>
  );
};

export default TabEditor;