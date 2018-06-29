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

const data1 = {
  "address":"http://foo.bar.com/p1",
  "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
}
// {
//   "address":"http://foo.bar.com/p2",
//   "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
// },
// {
//   "address":"http://foo.bar.com/p4",
//   "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
// },
// {
//   "address":"http://foo.bar.com/p5",
//   "links": []
// },
// {
//   "address":"http://foo.bar.com/p6",
//   "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
// }

// let string = ""
// let keys = Object.keys(data)
// let values = Object.values(data)

let address = Object.entries(data1)[0][1]
let links = Object.entries(data1)[1][1][0]
console.log(address) // outputs: `http://foo.bar.com/p1`
console.log(links) // outputs: `http://foo.bar.com/p2`


// for (let property in data1) {
//   string = string + data1[property] + " "
// }
//
// console.log(string)
// outputs from data1: `http://foo.bar.com/p1 http://foo.bar.com/p2,http://foo.bar.com/p3,http://foo.bar.com/p4`

// console.log(keys)
// outputs: `[ 'address', 'links' ]`

// console.log(values)
// outputs: `[ [ { address: 'http://foo.bar.com/p1', links: [Array] } ] ]`

// console.log(values[0])
// outputs:  `[ { address: 'http://foo.bar.com/p1',
//     links:
//      [ 'http://foo.bar.com/p2',
//        'http://foo.bar.com/p3',
//        'http://foo.bar.com/p4' ] } ]`
