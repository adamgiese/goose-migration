/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {
  toggleCompleted,
  toggleDrawer,
  updateTab
} from '../services/actions';
import { austin, daytrips } from '../content/index';
import Austin from './Austin.jsx';
/* eslint-ensable no-unused-vars */

const mapStateToProps = state => ({
  showCompleted: state.showCompleted,
  showDrawer: state.showDrawer,
  selectedTab: state.selectedTab,
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleCompleted: () => {
    dispatch(toggleCompleted());
  },
  dispatchToggleDrawer: () => {
    dispatch(toggleDrawer());
  },
  dispatchUpdateTab: (value) => {
    dispatch(updateTab(value));
  },
});

const App = (props) => {
  const {
    showCompleted,
    showDrawer,
    selectedTab,
    dispatchToggleCompleted,
    dispatchToggleDrawer,
    dispatchUpdateTab,
  } = props;

  return (
    <div className='app'>
      <Tabs className='tabs' onChange={dispatchUpdateTab}>
        <Tab label='Austin' value='austin'>
          <Austin {...props} />
        </Tab>
        <Tab label='Day Trip' value='day-trip'>
          Coming Soon!
          Ideas include:
            - Bastrop, TX
            - Lockhart, TX
        </Tab>
        <Tab label='Weekend Getaway' value='weekend-getaway'>
          Coming Soon!
          Ideas include:
            - Pasadena, TX
        </Tab>
        <Tab label='Vacations' value='vacation'>
          Coming Soon!
          Ideas include:
            - Disney Cruise
        </Tab>
      </Tabs>

      <FloatingActionButton className='menuToggle' onClick={dispatchToggleDrawer}>
        { showDrawer ? <CloseIcon /> : <MenuIcon /> }
      </FloatingActionButton>
    </div>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
