import React, { useState } from "react";
import { CalculateWinner } from "../../helpers";
import "./GameStyles.css";
import Board from "./Board";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CalculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
    </div>
  );
};

export default Game;
