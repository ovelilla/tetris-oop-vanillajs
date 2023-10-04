import { I, J, L, O, S, T, Z } from "./pieces/index.js";

class Game {
  constructor(canvas, board) {
    this.canvas = canvas;
    this.board = board;

    this.keyActions = {
      ArrowLeft: () => this.move(-1, 0),
      ArrowRight: () => this.move(1, 0),
      ArrowDown: () => this.move(0, 1),
      ArrowUp: () => this.rotate(),
    };

    this.elapsedTime = 0;
    this.lastTime = 0;
    this.elapsedTime = 0;

    this.init();
  }

  init() {
    this.currentTetromino = this.getRandomTetromino();

    document.addEventListener("keydown", this.handleKeyDown.bind(this));

    requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
  }

  getRandomTetromino() {
    const tetrominos = [I, J, L, O, S, T, Z];
    const randomIndex = Math.floor(Math.random() * tetrominos.length);
    return new tetrominos[randomIndex](this.board.cols);
  }

  handleKeyDown(e) {
    if (this.keyActions[e.key]) {
      this.keyActions[e.key]();
    }
  }

  move(x, y) {
    if (this.currentTetromino.canMove(this.board.grid, x, y)) {
      this.currentTetromino.move(x, y);
    }
  }

  rotate() {
    this.currentTetromino.rotate(this.board.grid);
  }

  gameLoop(timestamp) {
    this.deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.elapsedTime += this.deltaTime;

    if (this.elapsedTime > 1000) {
      this.update();
      this.elapsedTime = 0;
    }

    const rowsCleared = this.checkAndClearRows();
    this.draw();

    window.requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
  }

  update() {
    if (this.currentTetromino.canMove(this.board.grid, 0, 1)) {
      this.currentTetromino.move(0, 1);
    } else {
      this.currentTetromino.addToBoard(this.board.grid);
      // const rowsCleared = this.checkAndClearRows();
      this.currentTetromino = this.getRandomTetromino();
    }
  }

  draw() {
    this.canvas.drawBoard(this.board.grid);
    this.canvas.drawTetromino(this.currentTetromino);
  }

  checkAndClearRows() {
    const rowsToRemove = this.board.grid.filter((row) =>
      row.every((cell) => cell !== 0)
    );

    rowsToRemove.forEach((row) => {
      const index = this.board.grid.indexOf(row);
      this.board.grid.splice(index, 1);
      this.board.grid.unshift(Array(this.board.cols).fill(0));
    });

    return rowsToRemove.length;
  }
}

export default Game;
