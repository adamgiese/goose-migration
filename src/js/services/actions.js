export const toggleCompleted = () => (
  {
    type: 'TOGGLE_COMPLETED',
  }
);

export const toggleDrawer = () => (
  {
    type: 'TOGGLE_DRAWER',
  }
);

export const updateTab = payload => (
  {
    type: 'UPDATE_TAB',
    payload,
  }
);
