/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { toggleCompleted } from '../services/actions';
import { austin, daytrips } from '../content/index';
import TripList from './TripList.jsx';
/* eslint-ensable no-unused-vars */

const mapStateToProps = state => ({
  showCompleted: state.showCompleted,
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleCompleted: () => {
    dispatch(toggleCompleted());
  },
});

const App = (props) => {
  const {
    showCompleted,
    dispatchToggleCompleted,
  } = props;

  return (
    <div className='app'>
      <div>
        <button onClick={() => dispatchToggleCompleted()}>
          {showCompleted ? 'Hide' : 'Show'} Completed
        </button>
      </div>
      <TripList
        items={austin}
        showCompleted={showCompleted}
      />
    </div>
  );
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
