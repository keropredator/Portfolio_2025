import { useState, useEffect, useCallback } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));

  const handleClick = (index: number) => {
    const newCells = [...cells];
    if (newCells[index] === null) {
      newCells[index] = 'X';
      setCells(newCells);
    }
  };

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      const numpad: { [key: string]: number } = {
        '1': 6,
        '2': 7,
        '3': 8,
        '4': 3,
        '5': 4,
        '6': 5,
        '7': 0,
        '8': 1,
        '9': 2,
      };

      if (key in numpad) {
        const index = numpad[key as keyof typeof numpad];
        handleClick(index);
      }
    },
    [cells]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="game-wrapper">
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {cells.map((cell, index) => (
            <div
              key={index}
              className="cell"
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
