/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useCallback } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [gameOver, setGameOver] = useState(false);

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWinner = () => {
    for (const combination of winningCombination) {
      const [a, b, c] = combination;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setGameOver(true);
        return cells[a];
      }
    }
    if (!cells.includes(null)) {
      setGameOver(true);
      return 'Draw';
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (cells[index] !== null || gameOver) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    const result = checkForWinner();
    if (result) {
      if (result === 'draw') {
        alert("It's a Draw");
      } else {
        alert(`Player ${result} Win!`);
      }
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cells, currentPlayer, gameOver]
    //---------------------------------**-------------------------------**--------
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameOver(false);
  };

  return (
    <div className="game-wrapper">
      <div className="game-container">
        <h1>Tic Tac Toe</h1>
        <h2>Current Player : {currentPlayer} </h2>
        <div className="board">
          {cells.map((cell, index) => (
            <div
              key={index}
              className={`cell ${cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''}`}
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <button className="reset-button" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
