// Object in Object

const data = {
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p2",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
    },
    {
      "address":"http://foo.bar.com/p4",
      "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
    },
    {
      "address":"http://foo.bar.com/p5",
      "links": []
    },
    {
      "address":"http://foo.bar.com/p6",
      "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
    }
  ]
}


let result = ""
let keys = Object.keys(data)
let values = Object.values(data)

// for (let unique in data) {
//   result = result + data[unique] + " "
// }

// console.log(result)
// outputs: `http://foo.bar.com/p1 http://foo.bar.com/p2,http://foo.bar.com/p3,http://foo.bar.com/p4`

// console.log(keys)
// outputs: `[ 'address', 'links' ]`

// console.log(values)
// outputs: `[ [ { address: 'http://foo.bar.com/p1', links: [Array] } ] ]`

console.log(values[0])
// outputs:  `[ { address: 'http://foo.bar.com/p1',
//     links:
//      [ 'http://foo.bar.com/p2',
//        'http://foo.bar.com/p3',
//        'http://foo.bar.com/p4' ] } ]`
