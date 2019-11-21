function charCount (str) {
  let obj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/^[a-z-0-9]+$/.test(char)) {
      obj[char] = obj[char]++ || 1
    }
  }

  return obj
}

console.log(charCount('Adam_Wong_123'))

// Frequency counter - Quadratic (On^2)
function same (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    // if an index is false, immediately end loop
    if (correctIndex === -1) return false
    // remove the index at each pass to avoid repeat lookups
    arr2.splice(correctIndex, 1)
  }
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))

// Refactored Frequency Counter, linear approach O(n)
function same2 (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    // check for the squared value of key in frequencyCounter2
    if (!(key ** 2 in frequencyCounter2)) return false
    // check if the value of frequencyCounter2 === value of frequencyCounter1
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
  }
  return true
}
console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]))

function validAnagram (str1, str2) {
  if (str1.length !== str2.length) return false

  let freqCounter1 = {}
  let freqCounter2 = {}

  for (let char of str1) {
    freqCounter1[char] = (freqCounter1[char] || 0) + 1
  }
  for (let char of str2) {
    freqCounter2[char] = (freqCounter2[char] || 0) + 1
  }
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) return false
    if (freqCounter1[key] !== freqCounter2[key]) return false
  }
  return true
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))

// Refactored
function validAnagram2 (first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let char of first) {
    // if letter exists, increment, otherwise set to 1
    lookup[char] ? lookup[char]++ : (lookup[char] = 1)
  }
  for (let char of second) {
    // cant find letter or letter is zero then its not an anagram
    // if we encounter 0, make it truthy and return false
    if (!lookup[char]) {
      return false
    } else {
      lookup[char] -= 1
    }
  }
  return true
}

console.log(validAnagram2('', ''))
console.log(validAnagram2('aaz', 'zza'))
console.log(validAnagram2('anagram', 'nagaram'))
console.log(validAnagram2('rat', 'car'))

// Naiive solution // Time complexity O(n^2) space O(1)
function sumZero (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

// Refactored (USING POINTERS PATTERN) space complexity - 0(1)
function sumZero2 (arr) {
  let left = 0
  let right = arr.length - 1
  // use < to avoid arrays with a single 0
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// Assuming if array is sorted
console.log(sumZero([-4, -3, -2, -1, 0, 3, 5, 6]))
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))

// Time complexity = O(N) space complexity = O(N)
function countUniqueValues (arr) {
  let obj = {}
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    obj[value] ? obj[value]++ : (obj[value] = 1)
  }
  return Object.keys(obj).length
}

console.log(countUniqueValues([1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]))

// Multiple pointers - time (O(n)) - only works with sorted array
function countUniqueValues2 (arr) {
  if (!arr.length) return 0

  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // move i up to change that index to j's
      i++
      // transform array index to equal what's at j
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(countUniqueValues2([1, 1, 1, 2]))
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]))

// Sliding Window pattern, time - O(N^2)
function maxSubarraySum (arr, num) {
  if (num > arr.length) return null

  // Account for arrays with all negative numbers
  let max = -Infinity
  // arr length - num + 1 to signify where last window should end
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}
console.log(maxSubarraySum([4, 2, 1, 6], 1))
console.log(maxSubarraySum([], 2))
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 1, 5, 2, 8, 5, 5], 4))

// // Sliding Window pattern, Refactor time - O(n)
function maxSubarraySum2 (arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

