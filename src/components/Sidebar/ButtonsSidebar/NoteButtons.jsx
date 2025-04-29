import React from 'react';
 
 const NoteButtons = () => {
   return (
     <div className="note-buttons">
       <button className="whole-note"></button>
       <button className="half-note"></button>
       <button className="quarter-note"></button>
       <button className="eighth-note"></button>
       <button className="sixteenth-note"></button>
       <button className="triplet"></button>
       <button className="dotted-note"></button>
       <button className="double-dotted-note"></button>
       <button className="grace-note"></button>
       <button className="thirty-second-note"></button>
       <button className="rest"></button>
     </div>
   );
 };
 
 export default NoteButtons;