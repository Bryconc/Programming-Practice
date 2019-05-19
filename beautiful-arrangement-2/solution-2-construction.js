const constructArray = (n, k) => {
  const arr = [];

  let cur = 0;
  for (let i = 1; i < n - k; i++) {
    // Where k = 1
    arr[cur++] = i;
  }

  for (let i = 0; i <= k; i++) {
    // Where k = n - 1
    arr[cur++] = i % 2 == 0 ? n - k + Math.floor(i / 2) : n - Math.floor(i / 2);
  }

  return arr;
};

console.log(constructArray(6, 3));
