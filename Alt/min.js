// O(n)
function findMinimum (arr) {
  let min = arr[0]

  for (let val of arr) {
    if (val < min) {
      min = val
    }
  }
  return min
}

console.log(findMinimum([9, 2, 4, 6]))
