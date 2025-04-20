import React, { useEffect } from "react";

const BpmInput = () => {
  useEffect(() => {
    const input = document.getElementById("bpmInput");
    input.addEventListener("input", () => {
      const value = parseInt(input.value, 10);
      if (value > 400) input.value = 400;
      if (value < 2) input.value = 1;
    });
  }, []);

  return (
    <div className="speed-control bpm-control">
      <input
        type="number"
        id="bpmInput"
        min={1}
        max={400}
        defaultValue={120}
      />
      <span className="bpm-label">BPM</span>
    </div>
  );
};

export default BpmInput;
