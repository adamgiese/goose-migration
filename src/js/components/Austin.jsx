/* eslint-disable no-unused-vars */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import { blue300 } from 'material-ui/styles/colors';
import activities from '../content/index';
import tags from '../content/tags';
import groups from '../content/groups';
import {
  alphabeticallyAtKey,
  toFlatten,
  toObjectWithValueAtKey,
  toObjectsWithValueAtKey,
  toUnique,
  toTruthy,
  toValueAtKey,
  toObjects,
  toArrays
} from '../utils/array';
import TripList from './TripList.jsx';
/* eslint-ensable no-unused-vars */

const toTags = toValueAtKey('tags');
const toGroup = toValueAtKey('group');
const toTagWithSlug = toObjectWithValueAtKey(tags, 'slug');
const toGroupWithSlug = toObjectWithValueAtKey(groups, 'slug');
const byTitle = alphabeticallyAtKey('title');

const styles = {
  chip: {
    margin: 4,
  },
};

const Austin = (props) => {
  const {
    showCompleted,
    showDrawer,
    dispatchToggleCompleted,
    dispatchToggleTagToFilter,
    tag_filter,
  } = props;

  const toChips = tag => (
    <Chip
      onClick={() => { dispatchToggleTagToFilter(tag.slug); } }
      backgroundColor={tag_filter.includes(tag.slug) ? blue300 : null}
      style={styles.chip}
    >{tag.title}</Chip>
  );

  const toHasAllTags = element => tag_filter.every(tag => element.tags.includes(tag));
  const filteredItems = tag_filter.length === 0 ? activities : activities.filter(toHasAllTags);

  const austinTags = activities
    .map(toTags)
    .filter(toArrays)
    .reduce(toFlatten)
    .filter(toUnique)
    .map(toTagWithSlug)
    .filter(toObjects)
    .sort(byTitle);

  const austinGroups = austinTags
    .map(toGroup)
    .filter(toUnique)
    .map(toGroupWithSlug)
    .sort(byTitle);

  return (
    <div>
      <Drawer open={showDrawer}>
        <div className='drawer'>
          <div className='toggles'>
            <Toggle
              onToggle={() => dispatchToggleCompleted()}
              label={showCompleted ? 'Hide Completed' : 'Show Completed'}
            />
          </div>
          <div className='tags-container'>
            { austinGroups.map((group) => {
              const toThisGroup = toObjectsWithValueAtKey(group.slug, 'group');
              const tagsInGroup = austinTags.filter(toThisGroup).map(toChips);

              return <div key={group.slug}>
                <h3>{group.title}</h3>
                <div className='tags'>{tagsInGroup}</div>
              </div>;
            })}
          </div>
        </div>
      </Drawer>
      <TripList
        items={filteredItems.sort(byTitle)}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default Austin;
