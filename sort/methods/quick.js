
const quickSort = (arr, left, right) => {
  let x;
  let i;
  let tmp;
  if (left < right) {
    x = arr[right];
    i = left - 1;
    for (let j = left; j <= right; j += 1) {
      if (arr[j] <= x) {
        i += 1;
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
};


module.exports = [
  {
    method: data => quickSort(data, 0, data.length - 1),
    tag: 'quick sort',
  },
];
