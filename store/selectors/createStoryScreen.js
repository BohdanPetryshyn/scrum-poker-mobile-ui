import { createSelector } from 'reselect';

export const getCreateStoryScreenState = state =>
  state.get('createStoryScreen');

export const getStoryName = createSelector(getCreateStoryScreenState, state =>
  state.get('name')
);

export const getStoryDescription = createSelector(
  getCreateStoryScreenState,
  state => state.get('description')
);

export const getIsFormFilled = createSelector(
  [getStoryName, getStoryDescription],
  (name, description) => !!(name && description)
);
