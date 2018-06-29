// ES7 Syntax:

// let keys = Object.keys(fruits)
// console.log(keys)

// let values = Object.values(fruits)
// console.log(values)



// ***********************************

// const entries = require('object.entries')

let string = ""
let fruits = { "apples": "28", "oranges": "17", "pear": "54"}
// console.log(fruits)

// for...in loop
for (let property in fruits) {
  string = string + fruits[property] + " "

}
// console.log(string)

let combo = Object.entries(fruits)
console.log(combo)
// outputs: `[ [ 'apples', '28' ], [ 'oranges', '17' ], [ 'pear', '54' ] ]`
