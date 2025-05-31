import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import TabEditor from './components/TabEditor/TabEditor';
import TabHeader from './components/TabHeader/TabHeader';
import './index.css';

const initialTabData = Array.from({ length: 6 }, () => [
  { note: "", duration: "4n" },
]);

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });
  const [tabData, setTabData] = useState(initialTabData);

  const getSelectedDuration = () => {
    if (selectedCell.row === null || selectedCell.col === null) return "4n";
    return tabData[selectedCell.row][selectedCell.col]?.duration || "4n";
  };

  const handleDurationChange = (duration) => {
    if (selectedCell.row === null || selectedCell.col === null) return;
    const newData = tabData.map((row, rowIdx) => {
      if (rowIdx === selectedCell.row) {
        return row.map((cell, colIdx) => {
          if (colIdx === selectedCell.col) {
            return { ...cell, duration: duration };
          }
          return cell;
        });
      }
      return row;
    });
    setTabData(newData);
  };

  return (
    <div className="app-container">
      <TabHeader isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Sidebar 
        onDurationChange={handleDurationChange}
        selectedDuration={getSelectedDuration()} 
      />
      <TabEditor 
        isPlaying={isPlaying} 
        tabData={tabData} 
        onTabDataChange={setTabData}
        setSelectedCell={setSelectedCell}
      />
    </div>
  );
};

export default App;