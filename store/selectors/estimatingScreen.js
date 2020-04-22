import { createSelector } from 'reselect';

export const getEstimatingScreenState = state => state.get('estimatingScreen');

export const getVotingFinishTime = createSelector(
  getEstimatingScreenState,
  state => state.get('votingFinishTime')
);
