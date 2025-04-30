import React, { useEffect, useState } from "react";
import TabRow from "./TabRow";
import TabLinesSVG from "./TabLinesSVG";
import TuningSVG from "./TuningSVG";
import TimeSignatureSVG from "./TimeSignatureSVG";
import * as Tone from "tone";
import "./TabField.css";

const TabField = () => {
  const stringCount = 6;
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);

  const [tabData, setTabData] = useState(
    Array.from({ length: stringCount }, () => [
      { note: "", duration: "quarter" },
    ])
  );

  useEffect(() => {
    const bpmInput = document.getElementById("bpmInput");
    const updateBpm = () => {
      const value = parseInt(bpmInput.value, 10);
      if (!isNaN(value)) setBpm(value);
    };

    if (bpmInput) {
      bpmInput.addEventListener("input", updateBpm);
    }

    return () => {
      if (bpmInput) {
        bpmInput.removeEventListener("input", updateBpm);
      }
    };
  }, []);

  const updateBox = (rowIndex, colIndex, newValue) => {
    setTabData((prev) => {
      const newData = prev.map((row) => [...row]);
      newData[rowIndex][colIndex] = newValue;

      const isLastCol = colIndex === newData[rowIndex].length - 1;
      const isNotEmpty = newValue.note && newValue.note !== "";

      if (isLastCol && isNotEmpty) {
        for (let i = 0; i < newData.length; i++) {
          newData[i].push({ note: "", duration: "quarter" });
        }
      }

      return newData;
    });
  };

  // Кнопка відтворення (тільки логіка, без рендерингу кнопки тут)
  const togglePlay = async () => {
    setIsPlaying((prev) => !prev);

    await Tone.start();
    Tone.Transport.bpm.value = bpm;
    Tone.Transport.stop();
    Tone.Transport.cancel();

    const synth = new Tone.Synth().toDestination();
    const secondsPerBeat = 60 / bpm;

    tabData[0].forEach((box, index) => {
      const note = box.note;
      if (note !== "") {
        const fret = parseInt(note, 10);
        const midi = 40 + fret; // базова нота E3 (мі третьої октави)
        const time = index * secondsPerBeat;

        Tone.Transport.scheduleOnce((time) => {
          synth.triggerAttackRelease(Tone.Midi(midi).toFrequency(), "8n", time);
        }, time);
      }
    });

    Tone.Transport.start();
  };

  return (
    <div className="tab-field-container">
      <TuningSVG />
      <TimeSignatureSVG />
      <TabLinesSVG columnCount={tabData[0].length} bpm={bpm} />
      <div className="tab-boxes">
        {tabData.map((row, rowIndex) => (
          <TabRow
            key={rowIndex}
            rowData={row}
            rowIndex={rowIndex}
            onUpdateBox={updateBox}
          />
        ))}
      </div>
    </div>
  );
};

export default TabField;
