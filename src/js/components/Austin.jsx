/* eslint-disable no-unused-vars */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import Toggle from 'material-ui/Toggle';
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

  return (
    <div>
      <Drawer open={drawerOpen}>
        <div className='toggles'>
          <Toggle
            onToggle={() => dispatchToggleCompleted()}
            label={showCompleted ? 'Hide Completed' : 'Show Completed'}
          />
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
