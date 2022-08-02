// function amIWilson(p) {
//     const wilsonNum = [5, 13, 563]
//     return wilsonNum.includes(p, 0)
// }

const amIWilson = p => [5, 13, 563].includes(p, 0)

// Wilson primes satisfy the following condition. Let P represent a prime number.
// Then,
// ((P-1)! + 1) / (P * P)
// should give a whole number.
// Your task is to create a function that returns true if the given number is a Wilson prime.