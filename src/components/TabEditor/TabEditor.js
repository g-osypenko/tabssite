import React from "react";
import "./TabEditor.css";

const TabEditor = () => {
  return (
    <main className="tab-editor">
      <header className="tab-header">
        <span className="tab-title">Tab Editor</span>
        <div className="tab-header-buttons">
          <button className="play">▶</button>
          <button className="stop">⏹</button>
        </div>
      </header>
      <div className="tab-container">
        <span>Тут буде табулатура...</span>
      </div>
    </main>
  );
};

export default TabEditor;