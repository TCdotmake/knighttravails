import BOARD from "./BOARD.js";

const size = BOARD.length - 1;

export default function getPos() {
  let index = Math.floor(Math.random() * size);
  return BOARD[index];
}
