import React from "react";
import NoteButtons from "./ButtonsSidebar/NoteButtons";
import "./Sidebar.css";

const Sidebar = ({ onDurationChange, selectedDuration }) => {
  return (
    <aside className="sidebar">
      <h2>Інструменти</h2>
      <NoteButtons 
        onDurationChange={onDurationChange} 
        selectedDuration={selectedDuration}
      />
    </aside>
  );
};

export default Sidebar;