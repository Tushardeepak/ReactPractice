import React from 'react'

// ✅ reduce() accumulates a final Promise that resolves when all tasks are done.
// ✅ Returning reduce() allows us to call .then() on executeTasksInSeries().

// We return promiseChain so that the next iteration can properly chain the next task.

const executeTasksInSeries = (allTask) => {
  return allTask.reduce((promiseChain, currentTask) => {
    return promiseChain
      .then(() => {
        return new Promise((resolve, reject) => {
          currentTask((err, result) => {
            // This is cb with err, result are null and "Task done" in agrs
            if (err) {
              return reject(err) // This rejects, but chain continues
            }
            console.log('Task completed: ', result)
            resolve(result)
          })
        })
      })
      .catch((error) => {
        console.log('Stopping due to error:', error)
        return Promise.reject(error) // 🔴 Ensure the error stops further tasks
      })
  }, Promise.resolve()) // initial value
}

const task1 = (cb) => setTimeout(() => cb(null, 'Task 1 done'), 1000)
const task2 = (cb) => setTimeout(() => cb(null, 'Task 2 done'), 2000)
const task3 = (cb) => setTimeout(() => cb(null, 'Task 3 done'), 3000)

// const task2 = (cb) =>
//     setTimeout(() => cb('ERROR in task 2', 'Task 2 done'), 2000)

executeTasksInSeries([task1, task2, task3])
  .then(() => {
    console.log('All task done')
  })
  .catch((err) => {
    console.log('Error: ', err)
  })

// output:
// All task done
// Task completed:  Task 1 done
// Task completed:  Task 2 done
// Task completed:  Task 3 done

export const NCallbcakSeries = () => {
  return <p>NCallbcakSeries</p>
}
