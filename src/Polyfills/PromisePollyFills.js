import React from 'react'

const task1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 1 success')
    }, 1000)
  })
}

const task2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Task 2 failed')
    }, 500)
  })
}

const task3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task 3 success')
      //   reject('Task 3 failed')
    }, 500)
  })
}

Promise.prototype.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject('Promises are not itterable')
      return
    }

    let result = []
    if (promises.length == 0) {
      resolve(result)
      return
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise
        result[index] = res

        if (index == promises.length - 1) {
          resolve(result)
          return
        }
      } catch (err) {
        reject(err)
        return
      }
    })
  })
}

Promise.prototype.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject('Promises are not itterable')
      return
    }

    let result = []
    if (promises.length == 0) {
      resolve({
        status: 'fulfilled',
        value: '',
      })
      return
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise
        result[index] = {
          status: 'fulfilled',
          value: res,
        }
      } catch (err) {
        result[index] = {
          status: 'rejected',
          value: err,
        }
      } finally {
        if (index == promises.length - 1) {
          resolve(result)
        }
      }
    })
  })
}

Promise.prototype.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject('Promises are not itterable')
      return
    }

    if (promises.length == 0) {
      //AggregateError is a built-in JavaScript error type that represents multiple errors in a single object.
      reject(new AggregateError([], 'All promises were rejected'))
      return
    }

    let rejectedCount = 0
    let rejectedReasons = []
    promises.forEach(async (promise, index) => {
      try {
        const res = await promise
        resolve(res)
        return
      } catch (err) {
        rejectedReasons[index] = err
        rejectedCount++
        if (rejectedCount == promises.length) {
          reject(
            new AggregateError(rejectedReasons, 'All promises were rejected'),
          )
        }
      }
    })
  })
}

Promise.prototype.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject('Promises are not itterable')
      return
    }

    if (promises.length == 0) {
      return
    }

    promises.forEach(async (promise, index) => {
      try {
        const res = await promise
        resolve(res)
        return
      } catch (err) {
        reject(err)
        return
      }
    })
  })
}

export const PromisePollyFills = () => {
  const customPromise = new Promise(() => {})
  //   console.log('Promise all: ')
  //   Promise.all([task1(), task2(), task3()])
  //     .then((res) => {
  //       console.log('Success: ', res)
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })

  //   customPromise
  //     .myAll([task1(), task3()])
  //     .then((res) => {
  //       console.log('Success: ', res)
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })

  //   console.log('Promise allSettled: ')
  //   Promise.allSettled([task1(), task2(), task3()])
  //     .then((res) => {
  //       console.log('Success: ', res)
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })
  //   customPromise
  //     .myAllSettled([task1(), task3(), task2()])
  //     .then((res) => {
  //       console.log('Success: ', res)
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })

  //   console.log('Promise any: ')
  //   Promise.any([task1(), task2(), task3()])
  //     .then((res) => {
  //       console.log('Success: ', res)
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })
  //   customPromise
  //     .myAny([task1(), task3(), task2()])
  //     .then((res) => {
  //       console.log('Success: ', res)
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })

  console.log('Promise race: ')
  //   Promise.race([task1(), task2(), task3()])
  //     .then((res) => {
  //       console.log('Success: ', res)
  //     })
  //     .catch((err) => {
  //       console.log('Error: ', err)
  //     })
  customPromise
    .myRace([task1(), task3(), task2()])
    .then((res) => {
      console.log('Success: ', res)
    })
    .catch((err) => {
      console.log('Error: ', err)
    })

  return <p>Promise's Pollyfills</p>
}

// MORE GOOD WAYS

Promise.prototype.myAllGood = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Promises are not iterable'))
    }

    if (promises.length === 0) {
      return resolve([]) // Empty array resolves immediately
    }

    let results = new Array(promises.length)
    let resolvedCount = 0

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value
          resolvedCount++
          if (resolvedCount === promises.length) {
            resolve(results)
          }
        })
        .catch(reject) // Reject as soon as any promise fails
    })
  })
}

Promise.prototype.myAllSettledGood = function (promises) {
  return new Promise((resolve) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('Promises are not iterable')
    }

    if (promises.length === 0) {
      return resolve([])
    }

    let results = new Array(promises.length)
    let settledCount = 0

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = {status: 'fulfilled', value}
        })
        .catch((reason) => {
          results[index] = {status: 'rejected', reason}
        })
        .finally(() => {
          settledCount++
          if (settledCount === promises.length) {
            resolve(results)
          }
        })
    })
  })
}

Promise.prototype.myAnyGood = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Promises are not iterable'))
    }

    if (promises.length === 0) {
      return reject(new AggregateError([], 'All promises were rejected'))
    }

    let rejectedCount = 0
    let errors = []

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          errors[index] = err
          rejectedCount++
          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        })
    })
  })
}

Promise.prototype.myRaceGood = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Promises are not iterable'))
    }

    if (promises.length === 0) {
      return // Native Promise.race([]) never settles
    }

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject)
    })
  })
}
