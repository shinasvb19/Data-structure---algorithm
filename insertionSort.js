const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let insertion = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertion) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = insertion;
  }
};

const arr = [5, 3, 6, 1, 3, 8, 4, 0, 7, 2];
insertionSort(arr);
console.log(arr);
