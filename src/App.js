import React, { useState, useEffect, useCallback } from 'react';
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

  const handleDurationChange = useCallback((duration) => {
    if (selectedCell.row === null || selectedCell.col === null) return;
    
    const newData = [...tabData];
    const rowIndex = selectedCell.row;
    const colIndex = selectedCell.col;
    
    if (newData[rowIndex] && newData[rowIndex][colIndex]) {
      newData[rowIndex][colIndex] = {
        ...newData[rowIndex][colIndex],
        duration: duration
      };
      setTabData(newData);
    }
  }, [selectedCell, tabData]);

  const handleKeyDown = useCallback((e) => {
    if (e.target.id === 'bpmInput') return;
    
    const keyMap = {
      'q': '1n',
      'w': '2n',
      'e': '4n',
      'r': '8n',
      't': '16n',
      'y': '32n'
    };
    
    if (keyMap[e.key]) {
      handleDurationChange(keyMap[e.key]);
      e.preventDefault();
      e.stopPropagation();
    }
  }, [handleDurationChange]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [handleKeyDown]);

  const getSelectedDuration = () => {
    if (selectedCell.row === null || selectedCell.col === null) return "4n";
    return tabData[selectedCell.row][selectedCell.col]?.duration || "4n";
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