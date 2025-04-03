import React from "react";
import "./TabEditor.css";

const TabEditor = () => {
  return (
    <main className="tab-editor">
      <header className="tab-header">
        <span>Tab Editor</span>
        <div>
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