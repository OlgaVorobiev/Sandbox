// function solution(str){
//   return str.split('').reverse().join('')
// }

//const solution = str => str.split('').reverse().join('')

function solution(str){
    let result = ''
    for (let i = str.length - 1; i >= 0; i-- ) {
     //result += str.charAt(i)
     result += str[i]
    }
    return result
  }
 
 console.log(solution('world'))
 
//  Complete the solution so that it reverses the string passed into it.

//  'world'  =>  'dlrow'
//  'word'   =>  'drow' 