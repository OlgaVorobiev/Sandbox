// function sumMix(x){
//   const result = x.reduce(function(sum, current) {
//     sum += parseInt(current)
//     return sum
//   }, 0)
//   return result
// }


//  function sumMix(x){
//    const result = x.reduce((sum, current) => sum += parseInt(current), 0)
//    return result
//  }

//const sumMix = (x) => x.reduce((sum, current) => sum += parseInt(current), 0)

const sumMix = x => x.reduce((sum, current) => sum += (+current), 0)

// function sumMix(x){
//   let sum = 0
//   for (const num of x) {
//     sum += parseInt(num)
//   }
//   return sum
// }

// const sumMix = x => {
//   let sum = 0
//   for (const num of x) {
//     sum += parseInt(num)
//   }
//   return sum
// }

//  function sumMix(arr){
//    let sum = 0
//    arr.forEach(num => {
//     sum += parseInt(num)
//    });
//    return sum
//  }

console.log(sumMix([9, 3, '7', '3']))
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.




