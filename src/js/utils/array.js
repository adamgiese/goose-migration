// reducers

function removeDuplicates(acc, item) {
  return acc.includes(item) ? [...acc] : [...acc, item];
}

function flattenArrayAtKey(key) {
  return function (acc,item) {
    return [...acc, ...item[key]]
  }
}

function getArrayFromKey(key) {
  return function (acc,item) {
    return [...acc, item[key]]
  }
}

export default {
  removeDuplicates,
  flattenArrayAtKey,
  getArrayFromKey,
}
