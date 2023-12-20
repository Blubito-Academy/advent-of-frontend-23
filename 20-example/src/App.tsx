/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import { generateRandomMap } from "./random-map-generator";
import { Square } from "./domain/square";

// Queue is not part of the component state as it doesnt necessarily require re-renders
// this is a bit hacky but should be ok for this simple app
const queue: { row: number; column: number }[] = [];

function App() {
  const [map, setMap] = useState(generateRandomMap());

  useEffect(() => {
    const interval = setInterval(tick, 100);
    return () => {
      clearInterval(interval);
    };
  }, [map]);

  const tryToStartFireAtLocation = (row: number, column: number) => {
    if (isOutOfBounds(row, column)) {
      return;
    }
    const mapCopy: Square[][] = Object.assign([], map);
    const square = mapCopy[row][column];

    if (square.type === "land") {
      square.type = "fire";
      setMap(mapCopy);

      addToQueueIfLand(row - 1, column);
      addToQueueIfLand(row + 1, column);
      addToQueueIfLand(row, column - 1);
      addToQueueIfLand(row, column + 1);
    }
  };

  const addToQueueIfLand = (row: number, column: number) => {
    if (isOutOfBounds(row, column)) {
      return;
    }
    if(map[row][column].type === "land") {
      queue.push({row, column})
    }
  }

  const tick = () => {
    const nextSquare = queue.pop();
    if (nextSquare) {
      tryToStartFireAtLocation(nextSquare.row, nextSquare.column);
    }
  };
  
  const restart = () => {
    queue.length = 0; // This is how you can clear an array. Javascript sucks.
    setMap(generateRandomMap());
  }

  const isOutOfBounds = (row: number, column: number): boolean => {
    return row < 0 || row > 9 || column < 0 || column > 9;
  }

  return (
    <>
      <div className="boxes">
        {map.map((row) => {
          return row.map((square) => {
            return (
              <div
                className={`box ${square.type}`}
                key={`${square.row}:${square.column}`}
                onClick={() =>
                  tryToStartFireAtLocation(square.row, square.column)
                }
              >
                {``}
              </div>
            );
          });
        })}
      </div>
      <button onClick={restart}>Click here to Restart</button>
    </>
  );
}

export default App;