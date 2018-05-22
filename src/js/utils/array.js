// reducers

export function toFlatten(acc, value) {
  return [...acc, ...value];
}

// map

export function toValueAtKey(key) {
  return value => value[key];
}

export function toObjectWithValueAtKey(array, key) {
  return value => array.find(item => item[key] === value);
}

// filters

export function toUnique(element, index, array) {
  return array.indexOf(element) === index;
}

export function toObjects(element) {
  return typeof element === 'object' && !Array.isArray(element);
}

// export

export default {
  toUnique,
  toValueAtKey,
  toFlatten,
  toObjectWithValueAtKey,
  toObjects,
};
