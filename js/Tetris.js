import Canvas from "./Canvas.js";
import Board from "./Board.js";
import Game from "./Game.js";

class Tetris {
  constructor(options = {}) {
    this.canvas = new Canvas(options.rows, options.cols);
    this.board = new Board(options.rows, options.cols);
    this.game = new Game(this.canvas, this.board);
  }
}

export default Tetris;
