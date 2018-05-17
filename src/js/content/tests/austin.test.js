// const { austin, tags } = require('../index.js');
import { austin, tags } from '../index.js';
import { array } from '../../utils';
const { removeDuplicates } = array;

test('all tags exist', () => {
  const austinTags = removeDuplicates(austin.reduce((acc, activity) => ([...acc, ...activity.tags]), []));
  const slugs = tags.reduce((acc, tag) => [...acc, tag.slug], []);
  expect( austinTags.every(tag => slugs.includes(tag))).toBeTruthy();
})
