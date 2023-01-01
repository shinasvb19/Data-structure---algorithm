const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndx = i;
    for (let j = i + 1; i < arr.length; j++) {
      if (arr[j] < arr[minIndx]) {
        minIndx = j;
      }
    }
    [arr[i], arr[minIndx]] = [arr[minIndx], arr[i]];
  }
  return arr;
};

const arr = [5, 8, 2, 5, 1, 7];
console.log(selectionSort(arr));
console.log("code run");
