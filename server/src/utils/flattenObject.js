const isPlainObj = (o) => Boolean(
  o && o.constructor && o.constructor.prototype && o.constructor.prototype.hasOwnProperty('isPrototypeOf')
)
const handleArrays = (a) => {
  return a.reduce((acc, x, i) => {
    if (isPlainObj(x)) {
      for (const y in x) {
        acc[`${i}.${y}`] = x[y]
      }
    } else if (Array.isArray(x)) {
      return handleArrays(x)
    } else {
      acc[`${i}`] = x
    }
    return acc
  }, {})
}
export const flattenObj = (obj, keys = []) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (Array.isArray(obj[key])) {
      obj[key] = handleArrays(obj[key])
    }
    return Object.assign(acc, isPlainObj(obj[key])
      ? flattenObj(obj[key], keys.concat(key))
      : { [keys.concat(key).join('.')]: obj[key] }
    )
  }, {})
}

export const unflattenObj = (data) => {
  let result = {}
  for (let i in data) {
    let keys = i.split('.')
    keys.reduce(function (r, e, j) {
      return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 === j ? data[i] : {}) : [])
    }, result)
  }
  return result
}
