// Object in Object

const data = {
  "pages": [
    {
      "address":"http://foo.bar.com/p1",
      "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
    }
  ]
}

const data1 = {
  "address":"http://foo.bar.com/p1",
  "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
}


let result = ""
let keys1 = Object.keys(data1)
let values = Object.values(data1)

for (let unique in data1) {
  result = result + data1[unique] + " "
}

// console.log(result)
// outputs: `http://foo.bar.com/p1 http://foo.bar.com/p2,http://foo.bar.com/p3,http://foo.bar.com/p4`

// console.log(keys1)
// outputs: `[ 'address', 'links' ]`

console.log(values)
// outputs: `[ 'http://foo.bar.com/p1',
  // [ 'http://foo.bar.com/p2',
  //   'http://foo.bar.com/p3',
  //   'http://foo.bar.com/p4' ] ]`
