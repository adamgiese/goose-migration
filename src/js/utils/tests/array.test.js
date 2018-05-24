const {
  array: {
    toFlatten,
    toValueAtKey,
    toUnique,
    toObjectWithValueAtKey,
    toObjectsWithValueAtKey,
    toObjects,
    toArrays,
    toTruthy,
  },
} = require('../index.js');

test('toObjectsWithValueAtKey', () => {
  const beatles = [
    {
      name: 'John Lennon',
      band: 'The Beatles',
    },
    {
      name: 'Paul McCartney',
      band: 'The Beatles',
    },
    {
      name: 'George Harrison',
      band: 'The Beatles',
    },
    {
      name: 'John Lennon',
      band: 'The Beatles',
    },
  ];

  const stones = [
    {
      name: 'Brian Jones',
      band: 'The Rolling Stones',
    },
    {
      name: 'Mick Jagger',
      band: 'The Rolling Stones',
    },
    {
      name: 'Keith Richards',
      band: 'The Rolling Stones',
    },
  ];

  const musicians = [...beatles, ...stones];
  const isInTheBetterBand = toObjectsWithValueAtKey('The Beatles', 'band');
  expect(musicians.filter(isInTheBetterBand)).toEqual(beatles);

});

test('toUnique', () => {
  const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  expect(array.filter(toUnique)).toEqual([1, 2, 3, 4, 5]);
});

test('toFlatten', () => {
  const array = [[1, 2, 3], [4, 5, 6]];
  expect(array.reduce(toFlatten)).toEqual([1, 2, 3, 4, 5, 6]);

  const deepArray = [[[1,2],[3,4]],[[5,6],[7,8]]];
  expect(deepArray.reduce(toFlatten).reduce(toFlatten)).toEqual([1,2,3,4,5,6,7,8]);
});

test('toValueAtKey', () => {
  const toName = toValueAtKey('name');
  const array = [
    { name: 'Adam' },
    { name: 'Eve' },
  ];
  expect(array.map(toName)).toEqual(['Adam', 'Eve']);
});

test('toObjectWithValueAtKey', () => {
  const beatles = [
    {
      id: 1,
      name: 'John Lennon',
    },
    {
      id: 2,
      name: 'Paul McCartney',
    },
    {
      id: 3,
      name: 'George Harrison',
    },
    {
      id: 4,
      name: 'Ringo Starr',
    }
  ];
  const ids = [1,2,3,4];
  const toBeatlesWithId = toObjectWithValueAtKey(beatles, 'id');
  expect(ids.map(toBeatlesWithId)).toEqual(beatles)
});

test('toObjects', () => {
  const beatles = [
    { name: 'John' },
    { name: 'Paul' },
    { name: 'George' },
    { name: 'Ringo' },
  ];

  const arrayOfMostlyObjects = [
    ...beatles,
    'string',
    1,
    [ 'array', 'of', 'words' ],
  ];

  const arrayOfOnlyObjects = arrayOfMostlyObjects.filter(toObjects);
  expect(arrayOfOnlyObjects).toEqual(beatles);
});

test('toArrays', () => {
  const listsOfListsOfNumbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ];
  const listsOfNumbersAndLists = [
    ...listsOfListsOfNumbers,
    10, 11, 12
  ]

  const filteredList = listsOfNumbersAndLists.filter(toArrays);

  expect(filteredList).toEqual(listsOfListsOfNumbers);
});

test('toTruthy', () => {
  const listOfTruthyItems = [
    true,
    'abc',
    1,
  ];

  const listOfFalsyItems = [
    false,
    undefined,
    0,
    null,
  ];

  const allItems = [...listOfFalsyItems, ...listOfTruthyItems];

  expect(allItems.filter(toTruthy)).toEqual(listOfTruthyItems);
});
