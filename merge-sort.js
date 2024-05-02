// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
 if (arr.length <= 1) {
  return arr;
 }
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  const sortedLeft = mergeSort([...left]);
  const sortedRight = mergeSort([...right])

  return merge(sortedLeft, sortedRight);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  const arr = [];
  // Create an empty return array
  while (arrA.length && arrB.length) {

    if (arrA[0] < arrB[0]) {

      arr.push(arrA.shift());

    } else if (arrB[0] < arrA[0]) {

      arr.push(arrB.shift());

    }

  }
  return [...arr, ...arrA, ...arrB];
}




module.exports = [merge, mergeSort];

