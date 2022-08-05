// function squareSum(numbers){
//   return numbers.map(num => num ** 2).reduce((sum, num) => sum += num, 0)
// }

//const squareSum = numbers => numbers.map(num => num ** 2).reduce((sum, num) => sum += num, 0)

//const squareSum = numbers => numbers.map(num => Math.pow(num, 2)).reduce((sum, num) => sum += num, 0)
 
const squareSum = numbers => numbers.reduce((sum, num) => sum += Math.pow(num, 2), 0)


console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))