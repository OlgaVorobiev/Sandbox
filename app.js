// function countPositivesSumNegatives(input) {
//   if (input != null) {
//     if (input.length != 0) {
//       const countPositiveNum = input.filter(num => num > 0).length
//       const negativeNum = input.filter(num => num < 0).reduce((sum, num) => sum += num, 0)
//       return [countPositiveNum, negativeNum]
//     } else return []
//   } else return []
  
// }

function countPositivesSumNegatives(input) {
  if (input && input.length) {
   const countPositiveNum = input.filter(num => num > 0).length
   const negativeNum = input.filter(num => num < 0).reduce((sum, num) => sum += num, 0)
   return [countPositiveNum, negativeNum]
  } else return []
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))
console.log(countPositivesSumNegatives([]))
console.log(countPositivesSumNegatives(null))
console.log(countPositivesSumNegatives([ -11, -12, -13, -14]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10]))

//Clever
//function countPositivesSumNegatives(input) {
//  return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
//}

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
