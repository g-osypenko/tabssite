import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Інструменти</h2>
      <button>Додати ноту</button>
      <button>Додати такт</button>
    </aside>
  );
};

export default Sidebar;