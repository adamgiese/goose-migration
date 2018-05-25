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

export const toggleTagToFilter = payload => (
  {
    type: 'TOGGLE_TAG_FILTER',
    payload,
  }
);
