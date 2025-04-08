import React from 'react';

const TabSVG = () => {
  const width = 198;
  const height = 180;

  return (
    <svg width={`${width}px`} height={`${height}px`} className="tab-svg">
      {/* Номер такту */}
      <text x="0" y="18" fontSize="12px" fill="#aaaaaa">1</text>

      {/* BPM */}
      <text x="20" y="18" fontSize="14.4px" fill="#aaaaaa">120BPM</text>

      {/* Розмір такту */}
      <text x="12" y="52.8" fontSize="33.6px" fill="#888888" pointerEvents="none">4</text>
      <text x="12" y="77.6" fontSize="33.6px" fill="#888888" pointerEvents="none">4</text>

      {/* Горизонтальні лінії для струн */}
      {[84, 72, 60, 48, 36, 24].map((y) => (
        <path key={y} d={`M 0,${y} h ${width}`} fill="#aaaaaa" stroke="#aaaaaa" strokeWidth="0.6px" pointerEvents="none" />
      ))}

      {/* Вертикальні лінії з боків */}
      <path d={`M -1,24 v60 h1.2 v-60z`} fill="#aaaaaa" stroke="#aaaaaa" strokeWidth="0.6px" pointerEvents="none" />
      <path d={`M ${width},24 v60 h-1.2 v-60z`} fill="#aaaaaa" stroke="#aaaaaa" strokeWidth="0.6px" pointerEvents="none" />




     {/* Жовтий блок з номером такту 
      <path d="M105 27.6 L121.8 27.6 L121.8 44.4 L105 44.4 Z" fill="#F9E1B3" stroke="#060508" strokeWidth="1.68px" pointerEvents="none" />
      <text x="109.62" y="42" fontSize="15.12px" pointerEvents="none">1</text>//

      {/* Вертикальна лінія нот */}
      {/* <path d="M113.4 44.4 V108" fill="none" stroke="#aaaaaa" strokeWidth="1.2px" pointerEvents="none" />*/}




    </svg>
  );
};

export default TabSVG;
