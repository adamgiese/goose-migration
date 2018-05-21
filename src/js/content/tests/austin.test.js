// const { austin, tags } = require('../index.js');
import { austin, tags } from '../index.js';
import { array } from '../../utils';

const {
  toValueAtKey,
  isUnique,
  flatten,
} = array;

const toTags = toValueAtKey('tags');
const toSlug = toValueAtKey('slug');

test('all tags exist', () => {
  const austinTags = austin
    .map(toTags)
    .reduce(flatten)
    .filter(isUnique);
  const slugs = tags.map(toSlug);

  expect(
    austinTags.every((tag) => {
      const matchesFilter = slugs.includes(tag);
      if (!matchesFilter) {
        console.log(`${tag} is missing from 'js/content/tags'`);
      }

      return matchesFilter;
    })
  ).toBeTruthy();
});
