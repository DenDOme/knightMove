/* eslint-disable no-loop-func */
// import './main.css';

function knightMoves(start, end) {
  const dx = [1, 1, 2, 2, -1, -1, -2, -2];
  const dy = [2, -2, 1, -1, 2, -2, 1, -1];

  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (let i = 0; i < 8; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        const newPath = [...path, [newX, newY]];
        if (!visited.has(newPath)) {
          queue.push(newPath);
          visited.add(newPath);
        }
      }
    }
  }

  return 'No valid path found.';
}
const res = knightMoves([3, 3], [4, 3]);
console.log(res, res.length); // Output: [[0, 0], [1, 2]]
