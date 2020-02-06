function findSecondMaximum (arr) {
  arr.splice(arr.indexOf(Math.max(...arr)), 1)
  return Math.max(...arr)
}

// O(nlogn)
function findSecondMaximum (arr) {
  return arr.sort((a, b) => b - a)[1]
}

console.log(findSecondMaximum([9, 2, 3, 6]))

// O(n)
function findSecondMax (arr) {
  let firstMax = -Infinity
  let secondMax = -Infinity

  for (let val of arr) {
    if (val > firstMax) {
      firstMax = val
    }
  }
  for (let val of arr) {
    if (val !== firstMax && val > secondMax) secondMax = val
  }
  return secondMax
}

console.log(findSecondMax([9, 2, 3, 6]))

// O(n)
function findSecondMax2 (arr) {
  let max = -Infinity
  let secondMax = -Infinity

  for (let val of arr) {
    if (val > max) {
      secondMax = max
      max = val
    } else if (val > secondMax) {
      secondMax = val
    }
  }
  return secondMax
}

console.log(findSecondMax2([9, 2, 3, 6]))
