import React, { useState } from "react";
import "./TuningButton.css";

const defaultTuning = ["E3", "A3", "D4", "G4", "B4", "E5"];

const TuningButton = () => {
  const [tuning, setTuning] = useState(defaultTuning);

  const handleTuningChange = (index, value) => {
    const updated = [...tuning];
    updated[index] = value;
    setTuning(updated);
  };

  return (
    <div className="tuning-box">
      <label className="tuning-label">Tuning:</label>
      <div className="tuning-inputs">
        {tuning.map((note, index) => (
          <input
            key={index}
            type="text"
            value={note}
            maxLength={3}
            onChange={(e) =>
              handleTuningChange(index, e.target.value.toUpperCase())
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TuningButton;
