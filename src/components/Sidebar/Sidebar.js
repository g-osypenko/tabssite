import React from "react";
import NoteButtons from "./ButtonsSidebar/NoteButtons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Інструменти</h2>
      
      <NoteButtons />
    </aside>
  );
};

export default Sidebar;