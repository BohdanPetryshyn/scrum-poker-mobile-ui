import { createSelector } from 'reselect';

export const getCreateStoryScreenState = state =>
  state.get('createStoryScreen');

export const getStorySummary = createSelector(
  getCreateStoryScreenState,
  state => state.get('summary')
);

export const getStoryDescription = createSelector(
  getCreateStoryScreenState,
  state => state.get('description')
);

export const getIsFormFilled = createSelector(
  [getStorySummary, getStoryDescription],
  (name, description) => !!(name && description)
);
