
const insertionSortV1 = (arr) => {
  let tmp = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
};

const insertionSortV2 = (arr) => {
  let i;
  let j;
  let tmp = 0;
  for (i = 1; i < arr.length; i += 1) {
    tmp = arr[i];
    for (j = i; j > 0 && arr[j - 1] > tmp; j -= 1) {
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }
};

const insertionSortV3 = (arr) => {
  let tmp;
  let next;
  for (let i = 1; i < arr.length; i += 1) {
    tmp = arr[i];
    next = i - 1;
    while (arr[next] > tmp) {
      arr[next + 1] = arr[next];
      next -= 1;
    }
    arr[next + 1] = tmp;
  }
};

module.exports = [
  {
    method: data => insertionSortV1(data),
    tag: 'bubble sort v1',
  },
  {
    method: data => insertionSortV2(data),
    tag: 'bubble sort v2',
  },
  {
    method: data => insertionSortV3(data),
    tag: 'insertion sort',
  },
];
