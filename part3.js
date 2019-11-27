function linearSearch (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

// Best case O(1)  - worst and average case O(log N)
function binarySearch (array, elem) {
  let start = 0
  let end = array.length - 1
  let midpoint = Math.floor((start + end) / 2)

  while (start <= end) {
    let midpoint = Math.floor((start + end) / 2)
    let midpointValue = array[midpoint]
    if (elem < midpointValue) {
      end = midpoint - 1
    } else if (elem > midpointValue) {
      start = midpoint + 1
    } else {
      return midpoint
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7))

function naiiveSearch (str, targetStr) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < targetStr.length; j++) {
      if (targetStr[j] !== str[i + j]) break
      if (j === targetStr.length - 1) count++
    }
  }
  return count
}

console.log(naiiveSearch('lorie loled', 'lo'))

function calculateTime (keyboard, word) {
  let time = 0
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < keyboard.length; j++) {
      if (word[i] === keyboard[j]) {
        time += keyboard.indexOf(word[i])
        break
      }
    }
  }
  return time
}

console.log(calculateTime('abcdefghijklmnopqrstuvwxyz', 'cba'))

// optmization by adding noSwaps for conditional check
// Time complexity O(n) = best case O(n^2) worst case
// Average case is O(n^2)
function bubbleSort (arr) {
  var noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]))

function bubbleSort2 (arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSort2([37, 45, 29, 8, 12, 88, -3]))

function bubbleSort3 (arr) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}

console.log(bubbleSort3([37, 45, 29, 8, 12, 88, -3]))

// Time complexity - O(n^2), Can be twice as fast as bubble sort
function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    // Swap places
    // if (i !== lowest) {
    //   let temp = arr[i]
    //   arr[i] = arr[lowest]
    //   arr[lowest] = temp
    // }
    // ES6 with destructuring:
    if (i !== lowest) {
      ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]))

// Time complexity average & worst = O(n^2)
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > currVal) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currVal
  }
  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))
