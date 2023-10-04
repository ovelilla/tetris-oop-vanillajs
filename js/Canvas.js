class Canvas {
  constructor(rows = 20, cols = 10) {
    this.rows = rows;
    this.cols = cols;

    this.canvas = document.createElement("canvas");
    this.canvas.height = window.innerHeight;
    this.canvas.width = this.canvas.height / 2;
    this.blockSize = this.canvas.height / this.rows;
    this.context = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);
  }

  drawBoard(board) {
    this.clear();
    this.drawBackground();

    board.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell !== 0) {
          this.drawBlock(x, y, cell);
        }
      });
    });
  }

  drawBackground() {
    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawTetromino(tetromino) {
    tetromino.shape.forEach(([x, y]) => {
      this.drawBlock(tetromino.x + x, tetromino.y + y, tetromino.color);
    });
  }

  drawBlock(x, y, color) {
    this.context.fillStyle = color;
    this.context.fillRect(
      x * this.blockSize,
      y * this.blockSize,
      this.blockSize,
      this.blockSize
    );
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Canvas;
