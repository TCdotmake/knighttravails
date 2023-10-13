import { mkGraph, knightMoves } from "./knightMoves.js";
import getPos from "./getPos.js";
import { printPos, printPath } from "./print.js";
export default function app() {
  let newgraph = mkGraph();
  let a, b;
  for (let n = 0; n < 11; n++) {
    a = getPos();
    b = getPos();
    console.log(`From ${printPos(a)} to ${printPos(b)}`);
    console.log(printPath(knightMoves(a, b, newgraph)) + "\n\n");
  }
}
