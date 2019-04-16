

const leftChild = i => (2 * i) + 1;

let temp;
const swap = (arr, i, j) => {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const percDown = (arr, i, n) => {
  let child;
  let tmp;
  for (tmp = arr[i]; leftChild(i) < n; i = child) {
    child = leftChild(i);
    if (child !== n - 1 && arr[child + 1] > arr[child]) {
      child += 1;
    }
    if (tmp < arr[child]) {
      arr[i] = arr[child];
    } else {
      break;
    }
  }
  arr[i] = tmp;
};


const heapSort = (arr) => {
  let i;

  for (i = arr.length / 2; i >= 0; i -= 1) {
    percDown(arr, i, arr.length);
  }
  for (i = arr.length - 1; i > 0; i -= 1) {
    swap(arr, 0, i);
    percDown(arr, 0, i);
  }
};

module.exports = [
  {
    method: data => heapSort(data),
    tag: 'heap sort',
  },
];
