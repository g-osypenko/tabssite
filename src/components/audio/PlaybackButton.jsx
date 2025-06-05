// components/PlaybackController.js
import * as Tone from "tone";

export const playTab = async (tabData, bpm = 120) => {
  await Tone.start();
  Tone.Transport.bpm.value = bpm;

  const synth = new Tone.Synth().toDestination();

  tabData.forEach((row, stringIndex) => {
    row.forEach((box, colIndex) => {
      if (box && box.fret !== "") {
        const fret = parseInt(box.fret, 10);
        if (!isNaN(fret)) {
          const time = colIndex * 0.5; // 0.5 сек на кожну ноту
          const note = getNoteFromStringAndFret(stringIndex, fret);
          synth.triggerAttackRelease(note, "8n", `+${time}`);
        }
      }
    });
  });

  Tone.Transport.start();
};

export const stopTab = () => {
  Tone.Transport.stop();
};

const getNoteFromStringAndFret = (stringIndex, fret) => {
  const standardTuning = ["E4", "B3", "G3", "D3", "A2", "E2"];
  return Tone.Frequency(standardTuning[stringIndex]).transpose(fret).toNote();
};
