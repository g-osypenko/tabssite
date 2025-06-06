import { useEffect, useRef } from "react";
import * as Tone from "tone";
import { memoizeFrequency } from "../../utils/memoizeFrequency";

const TabPlayer = ({ isPlaying, bpm, tabData }) => {
  const synthRef = useRef(null);
  const scheduledIdsRef = useRef([]);
  const getFrequencyRef = useRef(null);

  useEffect(() => {
    // Мемоізована функція для кешування частот
    getFrequencyRef.current = memoizeFrequency(([stringIndex, fret]) => {
      const stringBaseMidi = [40, 45, 50, 55, 59, 64];
      const midi = stringBaseMidi[stringIndex] + fret;
      return Tone.Midi(midi).toFrequency();
    });
  }, []);

  useEffect(() => {
    const play = async () => {
      await Tone.start();
      Tone.Transport.stop();
      Tone.Transport.cancel();
      Tone.Transport.bpm.value = bpm;

      const columnCount = tabData[0]?.length || 0;

      let currentTime = 0;
      scheduledIdsRef.current.forEach(id => Tone.Transport.clear(id));
      scheduledIdsRef.current = [];

      for (let col = 0; col < columnCount; col++) {
        let maxDuration = 0;
        const columnNotes = [];

        for (let stringIndex = 0; stringIndex < tabData.length; stringIndex++) {
          const box = tabData[stringIndex][col];
          const note = box.note;
          const duration = box.duration || "4n";

          if (note !== "") {
            const fret = parseInt(note, 10);
            if (!isNaN(fret)) {
              const frequency = getFrequencyRef.current([stringIndex, fret]);
              const durationSeconds = Tone.Time(duration).toSeconds();

              columnNotes.push({ 
                frequency, 
                duration,
                time: currentTime,
                durationSeconds
              });

              if (durationSeconds > maxDuration) {
                maxDuration = durationSeconds;
              }
            }
          }
        }

        columnNotes.forEach(note => {
          const id = Tone.Transport.scheduleOnce(
            () => synthRef.current.triggerAttackRelease(
              note.frequency, 
              note.duration
            ),
            note.time
          );
          scheduledIdsRef.current.push(id);
        });

        currentTime += maxDuration || Tone.Time("4n").toSeconds();
      }

      Tone.Transport.start();
    };

    if (isPlaying) {
      play();
    } else {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    }

  }, [isPlaying, bpm, tabData]);

  useEffect(() => {
    synthRef.current = new Tone.PolySynth(Tone.Synth).toDestination();
    synthRef.current.volume.value = -6;

    return () => {
      synthRef.current.dispose();
    };
  }, []);

  return null;
};

export default TabPlayer;
