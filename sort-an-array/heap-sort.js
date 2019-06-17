const heapSort = arr => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    const swap = arr[0];
    arr[0] = arr[i];
    arr[i] = swap;

    heapify(arr, i, 0);
  }

  return arr;
};

const heapify = (arr, size, index) => {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    const swap = arr[largest];
    arr[largest] = arr[index];
    arr[index] = swap;

    heapify(arr, size, largest);
  }
};

console.log(heapSort([-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]));
