function countGoodSegments(arr, k) {
    let count = 0;
    let sum = 0;
    let start = 0;
    let end = 0;
    while (end < arr.length) {
      sum += arr[end];
      while (sum > k) {
        sum -= arr[start];
        start++;
      }
      count += end - start + 1;
      end++;
    }
    return count;
  }

let arr = [1, 2, 3, 4, 5]
let k = 7
countGoodSegments(arr, k)