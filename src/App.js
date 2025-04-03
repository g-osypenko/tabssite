import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TabEditor from "./components/TabEditor/TabEditor";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <TabEditor />
    </div>
  );
};

export default App;