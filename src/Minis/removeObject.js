let obj = {
  name: 'Tushar',
  age: 24,
  info: {
    address: 'Hyd',
    name: 'Tushar',
    extra: {
      name: 'Tushar',
      comp: true,
    },
  },
}

function remove(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let res = {}
  Object.keys(obj).map((ob) => {
    if (ob !== 'name') {
      res[ob] = remove(obj[ob])
    }
  })
  return res
}

console.log('new', remove(obj))
