let setBlocked = function (grid, position) {
  if (position == undefined) return;
  grid[position?.x][position?.y] = 1;
  return grid;
};
let setClear = function (grid, position) {
  if (position == undefined) return;
  grid[position?.x][position?.y] = 0;
  return grid;
};
let isClear = function (grid, position) {
  if (position == undefined) return;
  if (grid[position?.x] == undefined) {
    return true;
  }
  if (grid[position?.x][position?.y] != undefined) {
    return grid[position?.x][position?.y] == 0;
  }
  return true;
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
