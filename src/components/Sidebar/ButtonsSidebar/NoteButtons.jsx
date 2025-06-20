import React from 'react';
import Whole from '../../Images/Wholenote.svg';
import Half from '../../Images/Halfnote.svg';
import Quarter from '../../Images/Quarternote.svg';
import Eighth from '../../Images/Eighthnote.svg';
import Sixteenth from '../../Images/Sixteenthnote.svg';
import ThirtySecond from '../../Images/Thirtysecondnote.svg';

const durationTypeMap = {
  'whole': '1n',
  'half': '2n',
  'quarter': '4n',
  'eighth': '8n',
  'sixteenth': '16n',
  'thirty-second': '32n'
};

const reverseDurationMap = {
  '1n': 'whole',
  '2n': 'half',
  '4n': 'quarter',
  '8n': 'eighth',
  '16n': 'sixteenth',
  '32n': 'thirty-second'
};

const NoteButtons = ({ onDurationChange, selectedDuration }) => {
  const handleNoteClick = (durationType) => {
    const toneDuration = durationTypeMap[durationType] || '4n';
    onDurationChange?.(toneDuration);
  };

  const getActiveButtonType = () => {
    if (!selectedDuration) return null;
    return reverseDurationMap[selectedDuration];
  };

  const activeType = getActiveButtonType();

  return (
    <div className="note-buttons">
      <button 
        className={`whole-note ${activeType === 'whole' ? 'active' : ''}`} 
        title="Whole note (Q)" 
        onClick={() => handleNoteClick('whole')}
      >
        <img src={Whole} alt="Whole" />
      </button>
      <button 
        className={`half-note ${activeType === 'half' ? 'active' : ''}`} 
        title="Half note (W)" 
        onClick={() => handleNoteClick('half')}
      >
        <img src={Half} alt="Half" />
      </button>
      <button 
        className={`quarter-note ${activeType === 'quarter' ? 'active' : ''}`} 
        title="Quarter note (E)" 
        onClick={() => handleNoteClick('quarter')}
      >
        <img src={Quarter} alt="Quarter" />
      </button>
      <button 
        className={`eighth-note ${activeType === 'eighth' ? 'active' : ''}`} 
        title="Eighth note (R)" 
        onClick={() => handleNoteClick('eighth')}
      >
        <img src={Eighth} alt="Eighth" />
      </button>
      <button 
        className={`sixteenth-note ${activeType === 'sixteenth' ? 'active' : ''}`} 
        title="Sixteenth note (T)" 
        onClick={() => handleNoteClick('sixteenth')}
      >
        <img src={Sixteenth} alt="Sixteenth" />
      </button>
      <button 
        className={`thirty-second-note ${activeType === 'thirty-second' ? 'active' : ''}`} 
        title="Thirty-second note (Y)" 
        onClick={() => handleNoteClick('thirty-second')}
      >
        <img src={ThirtySecond} alt="Thirty-second" />
      </button>
    </div>
  );
};

export default NoteButtons;