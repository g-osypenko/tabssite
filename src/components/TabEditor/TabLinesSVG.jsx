import React from "react";
import "./TabLinesSVG.css";

const TabLinesSVG = ({ boxCount }) => {
  const rowHeight = 30;
  const totalHeight = 6 * rowHeight;
  const boxWidth = 40;
  const totalWidth = boxCount * boxWidth;

  const lines = [0, 1, 2, 3, 4, 5].map(i => (
    <line
      key={i}
      x1="0"
      y1={i * rowHeight + rowHeight / 2}
      x2={totalWidth}
      y2={i * rowHeight + rowHeight / 2}
      stroke="#aaa"
      strokeWidth="1"
    />
  ));

  return (
    <svg
      className="tablines-svg"
      width={totalWidth}
      height={totalHeight}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
    >
      {lines}
    </svg>
  );
};

export default TabLinesSVG;
