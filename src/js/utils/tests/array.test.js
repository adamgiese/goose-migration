const {
  array: {
    removeDuplicates,
  }
} = require('../index.js');

test('removeDuplicates', () => {
  const testArray = [1,2,3,4,5,1,2,3,4,5];
  expect(testArray.reduce(removeDuplicates, [])).toEqual([1,2,3,4,5]);
})
