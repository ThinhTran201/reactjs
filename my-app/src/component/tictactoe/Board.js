import React from "react";
import Cell from "./Cell";
const Board = (props) => {
  console.log(props);
  // Array(9).fill() -> trả ra 1 mảng có 9 phần tử nhưng do ta k ghi gì nên các phần tử đó là rỗng
  return (
    <div className="game-board">
      {props.cells.map(
        (
          item,
          index // duyệt mảng đó và cho từng phần tử là component <cell></cell>
        ) => (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
          ></Cell> // vì là duyệt map nên bắt buộc phải có key
        )
      )}
    </div>
  );
};

export default Board;
