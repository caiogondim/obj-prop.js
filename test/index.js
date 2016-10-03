const safeProp = require('../src/')
const assert = require('assert')

const obj = {
  a: {
    b: {
      c: '1337'
    }
  }
}

// Dot notation with existing value
assert(safeProp(obj, 'a.b.c') === '1337')

// Dot notation with missing value
assert(safeProp(obj, 'a.b.d') === undefined)

// Array notation with existing value
assert(safeProp(obj, '[a][b][c]') === '1337')

// Array notation with missing value
assert(safeProp(obj, '[a][b][d]') === undefined)

// Mixed dot and array notation with existing value
assert(safeProp(obj, '[a].b[c]') === '1337')

// Mixed dot and array notation with missing value
assert(safeProp(obj, '[a].b[d]') === undefined)

// Invalid query
assert(safeProp(obj, '[a].b*&%$%ˆ') === undefined)
assert(safeProp(obj, '[a].b[c]]') === undefined)
