import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((preGameBoard) => {
      const updateBoard = [
        ...preGameBoard.map((innterArray) => [...innterArray]),
      ];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectSquare();
    // setGameBoard((preGameBoard) => {
    //   preGameBoard[rowIndex][colIndex] = "X";
    //   return preGameBoard;
    // });
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled="disabled"
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
