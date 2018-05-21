const {
  array: {
    toFlatten,
    toValueAtKey,
    toUnique,
  },
} = require('../index.js');

test('toUnique', () => {
  const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  expect(array.filter(toUnique)).toEqual([1, 2, 3, 4, 5]);
});

test('toFlatten', () => {
  const array = [[1, 2, 3], [4, 5, 6]];
  expect(array.reduce(toFlatten)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('toValueAtKey', () => {
  const toName = toValueAtKey('name');
  const array = [
    { name: 'Adam' },
    { name: 'Eve' },
  ];
  expect(array.map(toName)).toEqual(['Adam', 'Eve']);
});
