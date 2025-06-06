import { useState, useEffect, useCallback } from 'react';
import './TicTacToe.css';
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

function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState<'X' | 'O' | 'draw' | null>(null);

  const checkForWinner = useCallback(() => {
    for (const combination of winningCombination) {
      const [a, b, c] = combination;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        setGameOver(true);
        return cells[a]; // Return the winning player ("X" or "O")
      }
    }
    if (!cells.includes(null)) {
      setGameOver(true);
      return 'draw'; // Return 'draw' if no cells are empty
    }
    return null; // No winner yet
  }, [cells]);

  useEffect(() => {
    const winner = checkForWinner();
    if (winner) {
      setGameOver(true);
      if (winner === 'draw') {
        setWinner('draw');
      } else {
        setWinner(winner);
      }
    }
  }, [cells, checkForWinner]);

  const handleClick = (index: number) => {
    if (cells[index] !== null || gameOver) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells); // Update the board state

    // Switch to the other player
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
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
    [cells, currentPlayer, gameOver]
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
        {!gameOver && <h2>Current Player: {currentPlayer}</h2>}
        <div className="board">
          {cells.map((cell, index) => (
            <div
              key={index}
              className={
                `cell ${cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''}` +
                (gameOver ? ' game-over' : '')
              }
              onClick={() => {
                if (!gameOver) {
                  handleClick(index);
                }
              }}
            >
              {cell}
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="game-over-message">
            {winner === 'draw' ? (
              <h2>It's a Draw!</h2>
            ) : (
              <h2>Winner: {winner}</h2>
            )}
          </div>
        )}
        <button className="reset-button" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
