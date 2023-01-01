const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        // let temp = array[i + 1];
        // array[i + 1] = array[i];
        // array[i] = temp;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
};
const array = [4, 5, 9, 8, 1, 2, 7];
bubbleSort(array);
console.log(array);
