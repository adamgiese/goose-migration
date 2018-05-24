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

export function toObjectsWithValueAtKey(value, key) {
  return object => object[key] === value;
}
export function toUnique(element, index, array) {
  return array.indexOf(element) === index;
}

export function toObjects(element) {
  return typeof element === 'object' && !Array.isArray(element);
}

export function toArrays(element) {
  return Array.isArray(element);
}

export function toTruthy(element) {
  return Boolean(element);
}

// export

export default {
  toUnique,
  toValueAtKey,
  toFlatten,
  toObjectWithValueAtKey,
  toObjectsWithValueAtKey,
  toObjects,
  toArrays,
  toTruthy,
};
