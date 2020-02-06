function findProduct (arr) {
  let product = []
  for (let i = 0; i < arr.length; i++) {
    product.push(arr.reduce((prev, curr) => prev * curr) / arr[i])
  }
  return product
}

console.log(findProduct([1, 2, 3, 4]))

// O(n^2)

function findProduct1 (arr) {
  let result = []
  let left = 1
  let currentProduct

  for (let i = 0; i < arr.length; i++) {
    currentProduct = 1

    for (let j = i + 1; j < arr.length; j++) {
      currentProduct = currentProduct * arr[j]
    }
    result.push(currentProduct * left)
    left = left * arr[i]
  }
  return result
}

console.log(findProduct1([1, 2, 3, 4]))

// O(n)
//
function findProduct2 (arr) {
  let left = 1
  let product = []

  for (let ele of arr) {
    product.push(left)
    left = left * ele
  }

  let right = 1
  for (let i = arr.length - 1; i > -1; i--) {
    product[i] *= right
    right *= arr[i]
  }
  return product
}

console.log(findProduct2([1, 2, 3, 4]))
