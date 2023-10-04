import Tetromino from "../Tetromino.js";

class J extends Tetromino {
  constructor(cols) {
    const shape = [
      [0, 0],
      [0, 1],
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
      color: "#0000ff",
      shape: shape,
      pivot: pivot,
    });
  }
}

export default J;
