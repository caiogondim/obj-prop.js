<img src="http://rawgit.com/caiogondim/safe-chain.js/master/img/icon.svg">

# safe-chain.js

<img src="http://travis-ci.org/caiogondim/safe-chain.js.svg?branch=master" alt="Travis CI"> [![codecov](https://codecov.io/gh/caiogondim/obstructed.js/branch/master/graph/badge.svg)](https://codecov.io/gh/caiogondim/safe-chain.js)

No more crazy checks to safely get a nested value inside an object.

Think of it as [Ruby safe operator](https://irb.rocks/ruby-safe-operator/) or
[CoffeeScript existential
operator](http://valve.github.io/blog/2013/07/13/existential-operator-in-coffeescript/),
implemented as a simple function in JavaScript.

## Usage

### Nested value

```js
// Before
const nestedVal = (
  obj &&
  obj.lorem &&
  obj.lorem.ipsum &&
  obj.lorem.ipsum.dolor
)

// After
const nestedVal = safeChain(obj, `lorem.ipsum.dolor`)
```

### Nested function

```js
// Before
const nestedFuncVal = (
  obj &&
  obj.lorem &&
  obj.lorem.ipsum &&
  obj.lorem.ipsum.dolor &&
  typeof obj.lorem.ipsum.dolor === 'function'
    ? obj.lorem.ipsum.dolor()
    : undefined
)

// After
const nestedFuncVal = safeChain(obj, `lorem.ipsum.dolor`)()
```

### Decorator

If only one argument is passed, *safe-chain.js* will return a decorated object
in which you can safely get nested properties.

```js
const obj = {
  a: {
    b: {
      c: '1337'
    }
  }
}

console.log(obj.a.b.d) // => undefined
console.log(obj.a.c.e) // => TypeError: Cannot read property 'e' of undefined

const decoratedObj = safeChain(obj)
console.log(decoratedObj.a.b.d) // => undefined
console.log(decoratedObj.a.c.e) // => undefined
```

It uses the new Proxy API under the hood, so make sure your platform supports it
in the first place.

## Installation

```bash
npm install @caiogondim/safe-chain
```


## Credits

- [Ruby safe operator](https://irb.rocks/ruby-safe-operator/)
- [CoffeeScript existential operator](http://valve.github.io/blog/2013/07/13/existential-operator-in-coffeescript/)
- Icon by Martin Chapman Fromm from the Noun Project
