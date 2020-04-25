import { createSelector } from 'reselect';

export const getEstimatingScreenState = state => state.get('estimatingScreen');

export const getEstimate = createSelector(getEstimatingScreenState, state =>
  state.get('estimate')
);
