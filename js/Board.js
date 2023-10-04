class Board {
  constructor(rows = 20, cols = 10) {
    this.rows = rows;
    this.cols = cols;
    this.grid = this.createBoard();
  }

  createBoard() {
    return Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0));
  }
}

export default Board;
