// time - O(log N) due to sort function
function findSum (arr, value) {
  function binarySearch (arr, item) {
    let first = 0
    let last = arr.length - 1
    let found = false
    while (first <= last && !found) {
      let mid = Math.floor(arr.length - 1 / 2)
      if (arr[mid] === item) {
        found = mid
      } else {
        if (item < arr[mid]) {
          last = mid--
        } else {
          first = mid++
        }
      }
      return found
    }
  }
  arr.sort((a, b) => a - b)
  let result
  for (let i of arr) {
    result = binarySearch(arr, value - i)
    if (result) return [i, value - i]
  }
  return false
}

console.log(findSum([1, 0, 3, 4], 5))
console.log(findSum([1, 2, 3, 4], 10))

// time - O(log N) due to sort function
function findSum2 (arr, value) {
  arrCopy = arr.sort((a, b) => a - b)
  let left = 0
  let right = arrCopy.length - 1
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[left] + arrCopy[right] < value) {
      left++
    } else if (arrCopy[left] + arrCopy[right] > value) {
      right--
    } else if (arrCopy[left] + arrCopy[right] === value) {
      return [arrCopy[left], arrCopy[right]]
    }
  }
  return false
}

// Using a set
// O(n) time as the array is only iterated once
function findSum3 (arr, value) {
  let found = new Set()
  let results = []
  for (let i in arr) {
    if (found.has(value - arr[i])) {
      return [value - arr[i], arr[i]]
    }
    // store visited elements in a hash set
    found.add(arr[i])
  }
  return false
}

console.log(findSum3([0, 1, 3, 4], 5))
console.log(findSum3([1, 2, 3, 4], 10))

// Output an array that is the product of every index except itself
// O(n^2) time due to nested iterations
function findProduct (arr) {
  let product = []
  for (let i = 0; i < arr.length; i++) {
    product.push(arr.reduce((prev, curr) => prev * curr) / arr[i])
  }
  return product
}

console.log(findProduct([1, 2, 3, 4]))

function findProduct2 (arr) {
  let left = 1
  let product = []
  for (let num of arr) {
    product.push(left)
    left = left * num
  }
  let right = 1
  for (let i = arr.length - 1; i >= 0; i--) {
    product[i] *= right
    right *= arr[i]
  }
  return product
}

console.log(findProduct2([1, 2, 3, 4]))

// O(n) time
function findMinimum (arr) {
  let currentMin = arr[0]
  // At every Index compare its value with current minimum
  // and if its less, then make that index value the new minimum value
  for (let val of arr) {
    if (val < currentMin) {
      currentMin = val
    }
  }
  return currentMin
}

console.log(findMinimum([9, 2, 3, 6]))

// O(n) time
function findFirstUnique (arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1)
  }
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return arr[i]
    }
  }
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6]))

function findSecondMaximum (arr) {
  arr.splice(arr.indexOf(Math.max(...arr)), 1)
  return Math.max(...arr)
}

console.log(findSecondMaximum([9, 2, 3, 6]))

function findSecondMax (arr) {
  let max = -Infinity
  let secondMax = -Infinity
  for (let num of arr) {
    if (num > max) {
      secondMax = max
      max = num
    } else if (num > secondMax) {
      secondMax = num
    }
  }
  return secondMax
}

console.log(findSecondMax([9, 2, 3, 6]))

function rightRotate (arr, n) {
  var rotatedList = []
  for (var item = arr.length - n; item < arr.length; item++) {
    rotatedList.push(arr[item])
  }
  for (var item = 0; item < arr.length - n; item++) rotatedList.push(arr[item])
  return rotatedList
}

function rightRotate2 (arr, n) {
  let sliceIdx = arr.length - n
  return arr.slice(sliceIdx).concat(arr.slice(0, sliceIdx))
}
console.log(rightRotate2([1, 2, 3, 4, 5], 3))

function reArrange (arr) {
  var neg = []
  var pos = []
  for (let ele of arr) {
    if (ele < 0) neg.push(ele)
    else pos.push(ele)
  }
  return [...neg, ...pos]
}
// O(n) time
function reArrange2 (arr) {
  let pointer = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      let temp = arr[pointer]
      arr[pointer] = arr[i]
      arr[i] = temp
      pointer++
    }
  }
  return arr
}

console.log(reArrange2([10, -1, 20, 4, 5, -9, -6]))

// New array should have every 2 indexes of highest and lowest nums in order
// O(n) space
function maxMin (arr) {
  let smallest = 0
  let biggest = arr.length - 1
  let result = []
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    result.push(arr[biggest], arr[smallest])
    biggest--
    smallest++
  }
  // for odd numbered arrays
  if (arr.length % 2 === 1) result.push(arr[Math.floor(arr.length / 2)])
  return result
}

console.log(maxMin([1, 2, 3, 4, 5]))
