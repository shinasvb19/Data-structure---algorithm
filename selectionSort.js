const selectionSort = (arr) => {
 for(let i=1;i<arr.length;i++){
   let insertion = arr[i]
   let j = i-1
   while(j>=0 && arr[j]>insertion )

 }
};

const arr = [1, 5, 6, 2, 3, 9, 0, 2, 33];

selectionSort(arr);
console.log(arr);
