/* eslint-disable no-unused-vars */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import { blue300 } from 'material-ui/styles/colors';
import { austin } from '../content/index';
import tags from '../content/tags';
import TripList from './TripList.jsx';
/* eslint-ensable no-unused-vars */

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

  const isSelected = selectedTab === 'austin';
  const drawerOpen = isSelected && showDrawer;

  const filteredItems = austin.reduce((acc, item) => (
    tag_filter.every(tag => item.tags.includes(tag)) || tag_filter.length === 0 ? [...acc, item] : acc
  ), []);

  const austinTags = // create array of unique tags from all activities
    Array.from(new Set(filteredItems.reduce((acc, val) => ([...acc, ...val.tags]), [])))
      .reduce((acc, val) => ([...acc, tags.find(tag => tag.slug === val)]), []);

  const tagChips = austinTags.map(tag => (
    <Chip
      onClick={() => { dispatchToggleTagToFilter(tag.slug); } }
      backgroundColor={tag_filter.includes(tag.slug) ? blue300 : null}
      style={styles.chip}
    >{tag.title}</Chip>
  ));

  return (
    <div>
      <Drawer open={drawerOpen}>
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
