function merge (arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      // this will also catch equal case
      results.push(arr2[j])
      j++
    }
  }
  // edge cases in case both arrays are not same length, it will still push remaining indexes
  // while (i < arr1.length) {
  //   results.push(arr1[i])
  //   i++
  // }
  // while (j < arr2.length) {
  //   results.push(arr2[j])
  //   j++
  // }
  let arr1Remains = arr1.slice(i)
  let arr2Remains = arr2.slice(j)
  return [...results, ...arr1Remains, ...arr2Remains]
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]))

// Time complexity O(n log n) (best, average, worst) Space O(n)
function mergeSort (arr) {
  // base case
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
  // mergeSort()
}
console.log(mergeSort([10, 24, 76, 73]))
console.log(mergeSort([10, 24, 76, 73, 72, 1]))
