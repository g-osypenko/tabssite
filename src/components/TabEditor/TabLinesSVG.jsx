// TabLinesSVG.js
import React from "react";

const LINE_HEIGHT = 24;
const LINE_COUNT = 6;
const COLUMN_WIDTH = 50;

const TabLinesSVG = ({ columnCount, bpm }) => {
  const width = columnCount * COLUMN_WIDTH;
  const height = (LINE_COUNT - 1) * LINE_HEIGHT;

  return (
    <svg
      width={width}
      height={height + 30}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {/* Горизонтальні лінії */}
      {Array.from({ length: LINE_COUNT }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * LINE_HEIGHT}
          x2={width}
          y2={i * LINE_HEIGHT}
          stroke="gray"
          strokeWidth={1}
        />
      ))}

      {/* Вертикальні лінії */}
      {Array.from({ length: columnCount }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * COLUMN_WIDTH}
          y1={0}
          x2={i * COLUMN_WIDTH}
          y2={height}
          stroke="lightgray"
          strokeWidth={1}
        />
      ))}

      {/* Текст BPM */}
      <text
        x={10}
        y={height + 25}
        fontSize="16"
        fill="gray"
        fontFamily="monospace"
      >
        {bpm} BPM
      </text>
    </svg>
  );
};

export default TabLinesSVG;
