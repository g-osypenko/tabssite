// src/components/TabField/TuningSVG.js
import React, { useEffect, useState } from "react";
 
const TuningSVG = () => {
  const [tuning, setTuning] = useState(["E3", "A3", "D4", "G4", "B4", "E5"]);

  useEffect(() => {
    const inputs = document.querySelectorAll(".tuning-inputs input");
    const current = Array.from(inputs).map((input) => input.value);
    setTuning(current);
  }, []);

  // Оновлення при кожному ререндері 
  useEffect(() => {
    const interval = setInterval(() => {
      const inputs = document.querySelectorAll(".tuning-inputs input");
      if (inputs.length === 6) {
        const values = Array.from(inputs).map((input) => input.value);
        setTuning(values);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="60"
      height="160"
      style={{
        position: "absolute",
        top: 0,
        left: -70,
        zIndex: 1,
      }}
    >
      {tuning.map((note, index) => (
        <text
          key={index}
          x={0}
          y={index * 24 + 12}
          fontSize="14"
          fill="#555"
        >
          {note}
        </text>
      ))}
    </svg>
  );
};

export default TuningSVG;