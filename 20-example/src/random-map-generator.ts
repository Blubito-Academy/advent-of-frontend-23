import { Square } from "./domain/square";

export const generateRandomMap = () => {
    const map = [];
  
    // We hardcode the width and height to 10 squares to keep it simple
    for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
      const row: Square[] = [];
      map.push(row);
      for (let columnIndex = 0; columnIndex < 10; columnIndex++) {
        const square: Square = {
          row: rowIndex,
          column: columnIndex,
          type: Math.random() > 0.5 ? "land" : "water",
        };
        row.push(square);
      }
    }
    return map;
  };