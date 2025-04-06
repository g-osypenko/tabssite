import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TabEditor from "./components/TabEditor/TabEditor";
import TabHeader from "./components/TabHeader/TabHeader";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <TabHeader />
      <Sidebar />
      <TabEditor />
    </div>
  );
};

export default App;