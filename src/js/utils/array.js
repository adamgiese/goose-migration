// reducers

export function flatten(acc, value) {
  return [...acc, ...value];
}

// map

export function toValueAtKey(key) {
  return function (value) {
    return value[key];
  };
}

// filters

export function isUnique(element, index, array) {
  return array.indexOf(element) === index;
}

// export

export default {
  isUnique,
  toValueAtKey,
  flatten,
};
