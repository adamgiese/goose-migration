const handleActions = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        showCompleted: !state.showCompleted,
      };
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        showDrawer: !state.showDrawer,
      };
    case 'UPDATE_TAB':
      return {
        ...state,
        selectedTab: payload,
      };
    default:
      return state;
  }
};
export default handleActions;
