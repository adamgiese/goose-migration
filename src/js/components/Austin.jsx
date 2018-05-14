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

  console.log(selectedTab, showDrawer);
  const isSelected = selectedTab === 'austin';

  return (
    <div>
      <Drawer open={isSelected && showDrawer}>
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
