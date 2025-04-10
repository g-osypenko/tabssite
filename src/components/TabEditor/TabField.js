import React, { useEffect, useState } from "react";
import TabRow from "./TabRow";
import "./TabField.css";

const TabField = () => {
  const stringCount = 6;

  const [tabData, setTabData] = useState(
    Array.from({ length: stringCount }, () => [""])
  );

  // Функція для оновлення значення конкретної комірки
  const updateBox = (rowIndex, colIndex, newValue) => {
    setTabData((prev) => {
      const newData = prev.map((row) => [...row]); // копія
      newData[rowIndex][colIndex] = newValue;

      // Якщо змінюємо останню колонку, і в неї щось введено — додаємо нову колонку
      const isLastColumn = colIndex === newData[rowIndex].length - 1;
      if (isLastColumn && newValue !== "") {
        for (let i = 0; i < newData.length; i++) {
          newData[i].push("");
        }
      }

      return newData;
    });
  };

  return (
    <div className="tab-field">
      {tabData.map((row, rowIndex) => (
        <TabRow
          key={rowIndex}
          rowData={row}
          onUpdateBox={(colIndex, newValue) =>
            updateBox(rowIndex, colIndex, newValue)
          }
        />
      ))}
    </div>
  );
};

export default TabField;
