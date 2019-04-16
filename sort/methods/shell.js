
const shellSort = (arr) => {
  let i;
  let j;
  let tmp;
  let increment;

  for (increment = arr.length / 2; increment > 0; increment /= 2) {
    for (i = increment; i < arr.length; i += 1) {
      tmp = arr[i];
      for (j = i; j >= increment; j -= increment) {
        if (tmp < arr[j - increment]) {
          arr[j] = arr[j - increment];
        } else {
          break;
        }
      }
      arr[j] = tmp;
    }
  }
};


module.exports = [
  {
    method: data => shellSort(data),
    tag: 'shell sort [shell increment]',
  },
];
