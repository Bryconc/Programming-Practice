const constructArray = (n, k) => {
  const values = [...Array(n).keys()].map(n => n + 1);
  const permutations = [];
  permute(permutations, values, 0);
  for (perm of permutations) {
    if (validate(perm, k)) {
      return perm;
    }
  }
};

const permute = (permutations, values, start) => {
  if (start >= values.length) {
    const cur = [];
    values.map(n => cur.push(n));
    permutations.push(cur);
  } else {
    for (let i = start; i < values.length; i++) {
      swap(values, start, i);
      permute(permutations, values, start + 1);
      swap(values, start, i);
    }
  }
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const validate = (nums, k) => {
  if (nums == null || nums.length < 2) {
    return false;
  }
  const diffSet = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = Math.abs(nums[i] - nums[i + 1]);
    diffSet.add(diff);
  }

  return k == diffSet.size;
};

console.log(constructArray(10, 6));
