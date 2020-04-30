import { createSelector } from 'reselect';

export const getResultScreenState = state => state.get('resultScreen');

export const getSelectedEstimate = createSelector(getResultScreenState, state =>
  state.get('selectedEstimate')
);
