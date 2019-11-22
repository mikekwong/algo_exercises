function sameFrequency (num1, num2) {
  num1 = num1.toString()
  num2 = num2.toString()
  if (num1.length !== num2.length) return false

  let freq1 = {}
  let freq2 = {}

  for (let num of num1) {
    freq1[num] = (freq1[num] || 0) + 1
  }
  for (let num of num2) {
    freq2[num] = (freq2[num] || 0) + 1
  }
  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) return false
  }
  return true
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(345, 325))
console.log(sameFrequency(22, 222))

// Freq Counter
function areThereDuplicates (...args) {
  let collection = {}
  for (let i = 0; i < args.length; i++) {
    let value = args[i]
    if (collection[value]) {
      return true
    } else {
      collection[value] = 1
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))

// Pointers
function areThereDuplicates2 (...args) {
  // Two pointers
  args.sort((a, b) => a > b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

console.log(areThereDuplicates2(1, 2, 3))
console.log(areThereDuplicates2(1, 2, 2))
console.log(areThereDuplicates2('a', 'b', 'c', 'a'))

// One liner with Set
// function areThereDuplicates () {
//   return new Set(arguments).size !== arguments.length
// }

// Multiple pointers - averagePair
function averagePair (arr, val) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2
    if (avg === val) return true
    else if (avg < val) left++
    else right--
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))

// order matters when checking - Space (O(n))
function isSubsequence (str1, str2) {
  let i = 0
  let j = 0
  if (!str1) return true
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++
    if (i === str1.length) return true
    j++
  }
  return false
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracababra'))
console.log(isSubsequence('abc', 'acb'))

// Find max sum of a consecutive subarray with length of the number
// Sliding Window
function maxSubarraySum (arr, num) {
  if (num > arr.length) return null
  let total = 0
  for (let i = 0; i < num; i++) {
    total += arr[i]
  }
  let temp = total
  for (let j = num; j < arr.length; j++) {
    temp += arr[j] - arr[j - num]
    total = Math.max(total, temp)
  }
  return total
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
console.log(maxSubarraySum([2, 3], 3))

// Time comlexity - O(n)
function minSubArrayLen (nums, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < nums.length) {
    // If current window doesn't add up to the given sum then
    // Move the window to the right
    if (total < sum && end < nums.length) {
      total += nums[end]
      end++
    }
    // If current window adds up to at least the sum given
    // then we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start]
      start++
    } else {
      break
    }
  }
  return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))

// Sliding window - find longest sub string with distinct chars- O(n) time
function findLongestSubstring (string) {
  let start = 0
  let longest = 0
  let seen = {}
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    // index -beginning of substring + 1(to include current count)
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}

console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
console.log(findLongestSubstring('thisisawesome'))
console.log(findLongestSubstring('bbbbb'))
