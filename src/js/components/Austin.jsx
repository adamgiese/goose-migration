/* eslint-disable no-unused-vars */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import { blue300 } from 'material-ui/styles/colors';
import { austin } from '../content/index';
import tags from '../content/tags';
import {
  toFlatten,
  toObjectWithValueAtKey,
  toUnique,
  toValueAtKey,
  toObjects,
  toArrays
} from '../utils/array';
import TripList from './TripList.jsx';
/* eslint-ensable no-unused-vars */

const toTags = toValueAtKey('tags');
const toTagWithSlug = toObjectWithValueAtKey(tags, 'slug');

const styles = {
  chip: {
    margin: 4,
  },
};

const Austin = (props) => {
  const {
    showCompleted,
    showDrawer,
    selectedTab,
    dispatchToggleCompleted,
    dispatchToggleTagToFilter,
    tag_filter,
  } = props;

  const isDrawerOpen = selectedTab === 'austin' && showDrawer;

  const toHasAllTags = element => tag_filter.every(tag => element.tags.includes(tag));
  const filteredItems = tag_filter.length === 0 ? austin : austin.filter(toHasAllTags);

  const austinTags = austin
    .map(toTags)
    .filter(toArrays)
    .reduce(toFlatten)
    .filter(toUnique)
    .map(toTagWithSlug)
    .filter(toObjects);

  const tagChips = austinTags.map(tag => (
    <Chip
      onClick={() => { dispatchToggleTagToFilter(tag.slug); } }
      backgroundColor={tag_filter.includes(tag.slug) ? blue300 : null}
      style={styles.chip}
    >{tag.title}</Chip>
  ));

  return (
    <div>
      <Drawer open={isDrawerOpen}>
        <div className='drawer'>
          <div className='toggles'>
            <Toggle
              onToggle={() => dispatchToggleCompleted()}
              label={showCompleted ? 'Hide Completed' : 'Show Completed'}
            />
          </div>
          <div className='tags'>
            { tagChips }
          </div>
        </div>
      </Drawer>
      <TripList
        items={filteredItems}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default Austin;
