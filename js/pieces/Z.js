import Tetromino from "../Tetromino.js";

class Z extends Tetromino {
  constructor(cols) {
    const shape = [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ];

    const pivot = { x: 1, y: 1 };

    const maxWidth =
      Math.max(...shape.map((point) => point[0])) -
      Math.min(...shape.map((point) => point[0])) +
      1;

    const initialX = Math.floor((cols - maxWidth) / 2);

    super({
      x: initialX,
      y: 0,
      color: "#ff0000",
      shape: shape,
      pivot: pivot,
    });
  }
}

export default Z;
