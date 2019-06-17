const flipAndInvertImage = grid => {
  for (let arr of grid) {
    for (let i = 0; i < Math.floor((arr.length + 1) / 2); i++) {
      const temp = arr[i];
      arr[i] = Number(!arr[arr.length - 1 - i]);
      arr[arr.length - 1 - i] = Number(!temp);
    }
  }

  return grid;
};

const swap = (arr, i, j) => {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const grid = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
flipAndInvertImage(grid);
console.log(grid);
