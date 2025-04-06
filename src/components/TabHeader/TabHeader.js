import React from 'react';
import './TabHeader.css'; 

const TabHeader = () => {
  return (
    <header className="tab-header">
      <div className="tab-header-buttons">
        <button className="play">▶</button>
        <button className="stop">⏹</button>
      </div>
    </header>
  );
};

export default TabHeader;