const handleActions = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'TOGGLE_COMPLETED':
      return {
        ...state,
        showCompleted: !state.showCompleted,
      };
    default:
      return state;
  }
};
export default handleActions;
