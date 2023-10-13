function printPos(xy) {
  return `[${xy[0]}, ${xy[1]}]`;
}

function printPath(arr) {
  let newArr = arr.map(printPos);
  return newArr.join(" , ");
}

export { printPos, printPath };
