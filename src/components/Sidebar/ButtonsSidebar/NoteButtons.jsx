import React from 'react';

import Whole from '../../Images/Wholenote.svg';
import Half from '../../Images/Halfnote.svg';
import Quarter from '../../Images/Quarternote.svg';
import Eighth from '../../Images/Eighthnote.svg';
import Sixteenth from '../../Images/Sixteenthnote.svg';
import ThirtySecond from '../../Images/Thirtysecondnote.svg';

const NoteButtons = () => {
  return (
    <div className="note-buttons">
      <button className="whole-note" title="Whole note"><img src={Whole} alt="Whole" /></button>
      <button className="half-note" title="Half note"><img src={Half} alt="Half" /></button>
      <button className="quarter-note" title="Quarter note"><img src={Quarter} alt="Quarter" /></button>
      <button className="eighth-note" title="Eighth note"><img src={Eighth} alt="Eighth" /></button>
      <button className="sixteenth-note" title="Sixteenth note"><img src={Sixteenth} alt="Sixteenth" /></button>
      <button className="thirty-second-note" title="Thirty-second note"><img src={ThirtySecond} alt="Thirty-second" /></button>
      <button className="triplet" title="Triplet"></button>
      <button className="dotted-note" title="Dotted note"></button>
      <button className="double-dotted-note" title="Double dotted note"></button>
      <button className="grace-note" title="Grace note"></button>
      <button className="rest" title="Rest"></button>
    </div>
  );
};

export default NoteButtons;
