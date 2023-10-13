function mkBoard() {
  let x = [];
  let y = [];
  for (let i = 0; i <= 7; i++) {
    x.push(i);
    y.push(i);
  }
  let xy = [];
  for (let n of x) {
    for (let m of y) {
      xy.push(`${n}${m}`);
    }
  }
  return xy;
}

function mkEdge(pos, board, MOVES) {
  let a = parseInt(pos[0]);
  let b = parseInt(pos[1]);
  let edges = [];
  for (let n of MOVES) {
    let move = `${parseInt(n[0]) + a}${parseInt(n[1]) + b}`;
    if (board.includes(move)) {
      edges.push(move);
    }
  }
  return edges;
}
function mkGraph() {
  const MOVES = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  const board = mkBoard();
  const graph = {};
  for (let pos of board) {
    graph[pos] = mkEdge(pos, board, MOVES);
  }
  return graph;
}

function knightMoves(begin, end, graph) {
  let visited = {};
  const parentArr = [];
  const queue = [];

  //initial condition
  parentArr.push(-1);
  queue.push(begin);
  while (queue.length > 0) {
    let current = queue.shift();
    let parent = parentArr.shift();
    if (current !== end) {
      for (let neighbor of graph[current]) {
        if (!visited[neighbor] && !queue.includes(neighbor)) {
          parentArr.push(current);
          queue.push(neighbor);
        }
      }
    }
    visited[current] = parent;
    if (current === end) {
      break;
    }
  }
  // return visited;
  //visited has visited the destination by this point
  let current = end;
  let path = [];
  while (visited[current]) {
    path.unshift(current);
    current = visited[current];
  }
  return path;
}

export { mkGraph, knightMoves, mkBoard };
