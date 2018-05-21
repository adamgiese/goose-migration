// reducers

export function toFlatten(acc, value) {
  return [...acc, ...value];
}

// map

export function toValueAtKey(key) {
  return value => value[key];
}

// filters

export function toUnique(element, index, array) {
  return array.indexOf(element) === index;
}

// export

export default {
  toUnique,
  toValueAtKey,
  toFlatten,
};
