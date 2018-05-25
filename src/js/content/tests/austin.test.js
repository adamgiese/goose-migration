import activities from '../index';
import tags from '../tags';
import { array } from '../../utils';

const {
  toValueAtKey,
  toUnique,
  toFlatten,
} = array;

const toTags = toValueAtKey('tags');
const toSlug = toValueAtKey('slug');

test('all tags exist', () => {
  const austinTags = activities
    .map(toTags)
    .reduce(toFlatten)
    .filter(toUnique);
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
