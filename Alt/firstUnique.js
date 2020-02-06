// O(n)
function findFirstUnique (arr) {
  let obj = {}
  for (let val of arr) {
    obj[val] ? obj[val]++ : (obj[val] = 1)
  }
  for (let val of arr) {
    if (obj[val] === 1) return val
  }
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6]))

// O(n)
function findFirstUnique2 (arr) {
  let unique = new Set()
  let nums = []

  for (let i = 0; i < arr.length; i++) {
    if (unique.has(arr[i])) {
      unique.delete(arr[i])
    } else {
      unique.add(arr[i])
    }
  }
  return unique.values().next().value
}

console.log(findFirstUnique2([9, 2, 3, 2, 6, 6]))

