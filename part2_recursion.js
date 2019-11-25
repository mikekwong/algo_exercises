function sumRange (num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}
console.log(sumRange(3))

function factorial (num) {
  if (num === 1) return num
  return num * factorial(num - 1)
}

console.log(factorial(4))

// helper method recursion
function collectOddValues (arr) {
  let result = []

  function helper (helperInput) {
    if (helperInput.length === 0) return
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]))

// pure recursion
function collectOddValues2 (arr) {
  let newArr = []
  if (arr.length === 0) return newArr
  if (arr[0] % 2 === 1) newArr.push(arr[0])
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}

console.log(collectOddValues([1, 2, 3, 4, 5]))

function power (base, exponent) {
  let answer = 1
  if (exponent === 0) return 1
  return base * power(base, exponent - 1)
}
console.log(power(2, 2))

function factorial (num) {
  if (num <= 0) return 1
  if (num === 1) return 1
  return num * factorial(num - 1)
}
console.log(factorial(4))

function productOfArray (arr) {
  if (!arr.length) return 1
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3]))

function recursiveRange (num) {
  if (num === 0) return num
  return num + recursiveRange(num - 1)
}
console.log(recursiveRange(4))

function fib (n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}
console.log(fib(4))
console.log(fib(10))

function reverse (str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}
console.log(reverse('awesome'))

function isPalindrome (str) {
  if (str.length <= 1) return true
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1))
  }
  return false
}
console.log(isPalindrome('awesome'))
console.log(isPalindrome('tacocat'))

function someRecursive (arr, callback) {
  if (array.length === 0) return false
  if (callback(array[0])) return true
  return someRecursive(array.slice(1), callback)
}

function flatten (arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = [...newArr, ...flatten(arr[i])]
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(flatten([1, 2, 3, [4, 5]]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
