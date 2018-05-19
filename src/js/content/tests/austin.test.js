// const { austin, tags } = require('../index.js');
import { austin, tags } from '../index.js';
import { array } from '../../utils';
const {
  removeDuplicates,
  flattenArrayAtKey,
  getArrayFromKey,
} = array;

const flattenTags = flattenArrayAtKey('tags');
const flattenSlugs = getArrayFromKey('slug');

test('all tags exist', () => {
  const austinTags = austin
    .reduce(flattenTags, [])
    .reduce(removeDuplicates, []);
  const slugs = tags.reduce(flattenSlugs, []);
  expect(
    austinTags.every(tag => {
      const matchesFilter = slugs.includes(tag);
      if (!matchesFilter) {
        console.log(`${tag} is missing from 'js/content/tags'`);
      }

      return matchesFilter;
    })
  ).toBeTruthy();
})
