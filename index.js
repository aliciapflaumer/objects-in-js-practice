// const entries = require('object.entries')

let string = ""
let fruits = { "apples": "28", "oranges": "17", "pear": "54"}
// console.log(fruits)

// for...in loop
for (let property in fruits) {
  string = string + fruits[property] + " "

}
// console.log(string)

//

const data = {
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    }
  ]
}

let result = ""

for (let unique in data) {
  result = result + data[unique] + " "
}
console.log(data)



// ES7 Syntax:

// let keys = Object.keys(fruits)
// console.log(keys)

// let values = Object.values(fruits)
// console.log(values)

// let combo = Object.entries(fruits)
// console.log(combo)
