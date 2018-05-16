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
    case 'TOGGLE_TAG_FILTER':
      return {
        ...state,
        tag_filter: state.tag_filter.includes(payload)
          ? state.tag_filter.filter(tag => tag !== payload)
          : [...state.tag_filter, payload],
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
