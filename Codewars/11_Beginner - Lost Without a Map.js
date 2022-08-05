// function maps(arr){
//   return arr.map(function(num) {
//     return num * 2
//   })
// }

// function maps(arr){
//   return arr.map(num => num * 2)
// }

const maps = arr => arr.map(num => num * 2)


console.log(maps([1, 2, 3]))
console.log(maps([4, 1, 1, 1, 4]))

// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]