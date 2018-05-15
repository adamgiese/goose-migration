/* eslint-disable no-unused-vars */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import { austin } from '../content/index';
import TripList from './TripList.jsx';
/* eslint-ensable no-unused-vars */

const Austin = (props) => {
  const {
    showCompleted,
    showDrawer,
    selectedTab,
    dispatchToggleCompleted,
  } = props;

  const isSelected = selectedTab === 'austin';
  const drawerOpen = isSelected && showDrawer;

  const uniqueTags = austin.reduce((acc, val) => {
    const slugList = acc.map(tag => tag.slug);
    const newTags = [...val.tags].filter(item => !slugList.includes(item.slug));
    return [...acc, ...newTags];
  }, []);

  const tagChips = uniqueTags.map(tag => (
    <Chip
      onClick={() => { console.log(`You have clicked: ${tag.slug}`); } }
    >{tag.title}</Chip>
  ));

  return (
    <div>
      <Drawer open={drawerOpen}>
        <div className='toggles'>
          <Toggle
            onToggle={() => dispatchToggleCompleted()}
            label={showCompleted ? 'Hide Completed' : 'Show Completed'}
          />
        </div>
        <div className='tags'>
          { tagChips }
        </div>
      </Drawer>
      <TripList
        items={austin}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default Austin;
