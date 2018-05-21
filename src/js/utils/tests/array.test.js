const {
  array: {
    flatten,
    toValueAtKey,
    isUnique,
  },
} = require('../index.js');

test('isUnique', () => {
  const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  expect(array.filter(isUnique)).toEqual([1, 2, 3, 4, 5]);
});

test('flatten', () => {
  const array = [[1, 2, 3], [4, 5, 6]];
  expect(array.reduce(flatten)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('toValueAtKey', () => {
  const toName = toValueAtKey('name');
  const array = [
    { name: 'Adam' },
    { name: 'Eve' },
  ];
  expect(array.map(toName)).toEqual(['Adam', 'Eve']);
});
