// src/components/TabEditor/TimeSignatureSVG.js
import React, { useEffect, useState } from "react";
 
const TimeSignatureSVG = () => {
  const [timeSignature, setTimeSignature] = useState("4/4");

  useEffect(() => {
    const input = document.getElementById("timeSignatureInput");
    const updateValue = () => {
      if (input && input.value) {
        setTimeSignature(input.value);
      }
    };

    if (input) {
      input.addEventListener("input", updateValue);
    }

    return () => {
      if (input) {
        input.removeEventListener("input", updateValue);
      }
    };
  }, []);

  // Поділ для логіки
  const [top, bottom] = timeSignature.split("/");

  return (
    <svg
      width="40"
      height="60"
      style={{
        position: "absolute",
        top: 10,
        left: -40, // можеш змінити, якщо хочеш далі/ближче
        zIndex: 3,
      }}
    >
      <text
        x="20"
        y="22"
        fontSize="18"
        fill="black"
        textAnchor="middle"
        fontFamily="monospace"
      >
        {top || "4"}
      </text>
      <text
        x="20"
        y="44"
        fontSize="18"
        fill="black"
        textAnchor="middle"
        fontFamily="monospace"
      >
        {bottom || "4"}
      </text>
    </svg>
  );
};

export default TimeSignatureSVG;