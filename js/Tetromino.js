class Tetromino {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
    this.shape = options.shape;
    this.pivot = options.pivot;
  }

  addToBoard(board) {
    this.shape.forEach(([x, y]) => {
      board[this.y + y][this.x + x] = this.color;
    });
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  canMove(board, x, y) {
    return this.shape.every(([dx, dy]) => {
      const nextX = this.x + x + dx;
      const nextY = this.y + y + dy;
      return (
        nextX >= 0 &&
        nextX < board[0].length &&
        nextY < board.length &&
        (board[nextY][nextX] === 0 || board[nextY][nextX] === 1)
      );
    });
  }

  rotate(board) {
    this.shape = this.shape.map(([x, y]) => {
      const dx = x - this.pivot.x;
      const dy = y - this.pivot.y;
      return [dy + this.pivot.x, -dx + this.pivot.y];
    });

    if (!this.canRotate(board)) {
      const adjustments = [-1, 1, -2, 2];

      for (let adj of adjustments) {
        this.x += adj;
        if (this.canRotate(board)) {
          return;
        }
        this.x -= adj;
      }
    }
  }

  canRotate(board) {
    return this.shape.every(([x, y]) => {
      const nextX = this.x + x;
      const nextY = this.y + y;
      return (
        nextX >= 0 &&
        nextX < board[0].length &&
        nextY >= 0 &&
        nextY < board.length &&
        (board[nextY][nextX] === 0 || board[nextY][nextX] === 1)
      );
    });
  }
}

export default Tetromino;
