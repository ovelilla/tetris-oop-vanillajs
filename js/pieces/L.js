import Tetromino from "../Tetromino.js";

class L extends Tetromino {
  constructor(cols) {
    const shape = [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ];

    const pivot = { x: 1, y: 0 };

    const maxWidth =
      Math.max(...shape.map((point) => point[0])) -
      Math.min(...shape.map((point) => point[0])) +
      1;

    const initialX = Math.floor((cols - maxWidth) / 2);

    super({
      x: initialX,
      y: 0,
      color: "#ff8c00",
      shape: shape,
      pivot: pivot,
    });
  }
}

export default L;
