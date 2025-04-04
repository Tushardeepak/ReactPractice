import React from 'react'

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this)
//     }
//   }

// IF WRITTEN LIKE ABOVE

//   for (ar in arr) {
//     console.log(ar)
//   }
// OUTPUT:
//   0
//   1
//   2
//   3
//   myForEach // This will also print in the loop which is worng.
// To prevent this we need to make it non enumerable like below:

// Object.defineProperty(Array.prototype, 'myForEach', {
//   value: function (callback) {
//     if (typeof callback != 'function') {
//       throw new TypeError('Callback must be a function')
//     }

//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this)
//     }
//   },
//   enumerable: false,
// })

// https://chatgpt.com/share/67bbde40-d768-800a-9385-9707f9d43d78

Array.prototype.myForEach = function (callback) {
  if (typeof callback != 'function') {
    throw new TypeError('Callback must be a function')
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

Array.prototype.myMap = function (callback) {
  if (typeof callback != 'function') {
    throw new TypeError('Callback must be a function')
  }

  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue // Skip empty slots in sparse arrays
    arr.push(callback(this[i], i, this))
  }
  return arr
}

Array.prototype.myFilter = function (callback) {
  if (typeof callback != 'function') {
    throw new TypeError('Callback must be a function')
  }
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue

    const condition = callback(this[i], i, this)
    if (condition) {
      arr.push(this[i])
    }
  }
  return arr
}

Array.prototype.myFind = function (callback) {
  if (typeof callback != 'function') {
    throw new TypeError('Callback must be a function')
  }

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue // Should not consider empty elements

    const condition = callback(this[i], i, this)
    if (condition) {
      return this[i]
    }
  }
}

Array.prototype.mySome = function (callback) {
  if (typeof callback != 'function') {
    throw new TypeError('Callback must be a function')
  }

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue

    const condition = callback(this[i], i, this)
    if (condition) {
      return true
    }
  }
  return false
}

Array.prototype.myEvery = function (callback) {
  if (typeof callback != 'function') {
    throw new TypeError('Callback must be a function')
  }

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue

    const condition = callback(this[i], i, this)
    if (!condition) {
      return false
    }
  }
  return true
}

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback != 'function') {
    throw new TypeError('Callback must be a function')
  }

  let answer
  let i = 0

  // This args refers to the agrs of myReduce on which it is called,
  // These are arguments here -> callback, initialValue
  if (arguments.length > 1) {
    answer = initialValue
  } else {
    // We need to find first existing index value in the array
    while (i < this.length && !(i in this)) i++

    if (i >= this.length) {
      throw new TypeError('Reduce of empty array with no initial value')
    }
    answer = this[i++]
  }
  // In for loop initialisation of i is not needed as, which ever element if first valid
  // that will be assigned to answer and i++ which point to next element
  for (; i < this.length; i++) {
    if (!(i in this)) continue

    answer = callback(answer, this[i], i, this)
  }
  return answer
}

Array.prototype.myFlat = function (givenDepth = 1) {
  let result = []
  function flat(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth <= givenDepth) {
        flat(arr[i], depth + 1)
      } else {
        result.push(arr[i])
      }
    }
  }
  flat(this, 1)
  return result
}

String.prototype.myConcat = function (...args) {
  let res = this
  for (let i = 0; i < args.length; i++) {
    res = res + args[i]
  }
  return res
}

export const ArrayPollyFills = () => {
  const arr = [1, 2, 3, 4]

  //   console.log('My ForEach: ')
  //   arr.myForEach((ar, index) => {
  //     console.log(index, '->', ar * 2)
  //   })

  //   console.log('My Map: ')
  //   const _arr = arr.myMap((ar) => {
  //     return ar * 2
  //   })
  //   console.log(_arr)

  //   console.log('My Filter: ')
  //   const _arr = arr.myFilter((ar) => ar % 2 == 0)
  //   console.log(_arr)

  //   console.log('My Find: ')
  //   const _arr = arr.myFind((ar) => ar === 2)
  //   console.log(_arr)

  //   console.log('My Some: ')
  //   const _arr = arr.mySome((ar) => ar === 6)
  //   console.log(_arr)

  //   console.log('My Every: ')
  //   const _arr = arr.myEvery((ar) => ar > 10)
  //   console.log(_arr)

  //   console.log('My Reduce: ')
  //   const _arr = arr.myReduce((acc, curr) => {
  //     return acc + curr
  //   }, 0)
  //   console.log(_arr)

  // console.log('My Flat: ')
  // const newArr = [1, 2, 3, [(4, 5, [7, 8])]]
  // const newArr2 = [1, 2, 3, [4, 5]]
  // console.log(newArr.myFlat(2))

  console.log('My Concat: ')
  const str = 'Tushar'
  const str2 = 'Deepak'
  // console.log(str.concat(" ", str2))
  console.log(str.myConcat(' ', str2))

  return <p>Array's PollyFills</p>
}
