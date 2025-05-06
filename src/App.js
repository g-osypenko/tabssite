import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TabEditor from "./components/TabEditor/TabEditor";
import TabHeader from "./components/TabHeader/TabHeader";
import "./index.css";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app-container">
      <TabHeader isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Sidebar />
      <TabEditor isPlaying={isPlaying} />
    </div>
  );
};


export default App;
