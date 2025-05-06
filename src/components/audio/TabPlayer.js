import { useEffect } from "react";
import * as Tone from "tone";

const TabPlayer = ({ isPlaying, bpm, tabData }) => {
  useEffect(() => {
    if (!isPlaying) {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      return;
    }

    const play = async () => {
      await Tone.start();
      Tone.Transport.stop();
      Tone.Transport.cancel();
      Tone.Transport.bpm.value = bpm;

      // 🎹 Поліфонічний синт
      const synth = new Tone.PolySynth(Tone.Synth).toDestination();
      const secondsPerBeat = 60 / bpm;

      const stringBaseMidi = [40, 45, 50, 55, 59, 64];
      const columnCount = tabData[0].length;

      for (let col = 0; col < columnCount; col++) {
        const time = col * secondsPerBeat;
        const notesToPlay = [];

        for (let stringIndex = 0; stringIndex < tabData.length; stringIndex++) {
          const box = tabData[stringIndex][col];
          const note = box.note;

          if (note !== "") {
            const fret = parseInt(note, 10);
            if (!isNaN(fret)) {
              const midi = stringBaseMidi[stringIndex] + fret;
              notesToPlay.push(Tone.Midi(midi).toFrequency());
            }
          }
        }

        if (notesToPlay.length > 0) {
          Tone.Transport.scheduleOnce((t) => {
            synth.triggerAttackRelease(notesToPlay, "8n", t);
            synth.volume.value = -6;
          }, time);
        }
      }

      Tone.Transport.start();
    };

    play();
  }, [isPlaying, bpm, tabData]);

  return null;
};

export default TabPlayer;
