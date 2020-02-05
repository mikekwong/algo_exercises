// O(n^2)
function findSumBrute (arr, val) {
  for (let k of arr) {
    for (let l of arr) {
      if (k + l === val) {
        return [k, l]
      }
    }
  }
  return false
}

console.log(findSumBrute([1, 2, 3, 4], 5))

// o(nlog(n))
function findSumPointers (arr, val) {
  arr = arr.sort((a, b) => a - b)
  let left = 0
  let right = arr.length - 1

  let sum = arr[left] + arr[right]

  while (left < right) {
    if (sum > val) {
      right--
    } else if (sum < val) {
      left--
    } else {
      return [arr[left], arr[right]]
    }
  }
  return false
}

console.log(findSumPointers([8, 5, 2, 3, 4], 10))

// O(n)
function findSumSet (arr, val) {
  let foundVals = new Set()
  let results = []
  for (let i = 0; i < arr.length; i++) {
    foundVals.add(arr[i])

    if (foundVals.has(val - arr[i])) {
      results.push(val - arr[i])
      results.push(arr[i])
      return results
    }
  }
  return false
}

console.log(findSumSet([1, 2, 4], 5))
