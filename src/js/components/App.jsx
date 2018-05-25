/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {
  toggleCompleted,
  toggleDrawer,
  toggleTagToFilter
} from '../services/actions';
import { austin, daytrips } from '../content/index';
import Austin from './Austin.jsx';
/* eslint-ensable no-unused-vars */

const mapStateToProps = state => ({
  showCompleted: state.showCompleted,
  showDrawer: state.showDrawer,
  tag_filter: state.tag_filter,
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleCompleted: () => {
    dispatch(toggleCompleted());
  },
  dispatchToggleTagToFilter: (value) => {
    dispatch(toggleTagToFilter(value));
  },
  dispatchToggleDrawer: () => {
    dispatch(toggleDrawer());
  },
});

const App = (props) => {
  const {
    showCompleted,
    showDrawer,
    dispatchToggleCompleted,
    dispatchToggleDrawer,
    dispatchToggleTagToFilter,
    tag_filter,
  } = props;

  return (
    <div className='app'>
      <h1>Austin Activities</h1>
      <Austin {...props} />

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
