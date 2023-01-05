let setBlocked = function (grid, position) {
  grid[position?.x][position?.y] = 1;
  return grid;
};
let setClear = function (grid, position) {
  grid[position?.x][position?.y] = 0;
  return grid;
};
let isClear = function (grid, position) {
  return grid[position?.x][position?.y] == 0;
};
let generateGrid = function (mapSize) {
  let grid = [];
  for (let index = 0; index < mapSize; index++) {
    grid.push([]);
    for (let index2 = 0; index2 < mapSize; index2++) {
      grid[index].push(0);
    }
  }
  return grid;
};

export { setBlocked, setClear, isClear, generateGrid };
