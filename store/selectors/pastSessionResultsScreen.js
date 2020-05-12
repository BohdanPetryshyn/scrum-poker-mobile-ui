import { createSelector } from 'reselect';

export const getPastSessionResultsScreenState = state =>
  state.get('pastSessionResultsScreen');

export const getPastVotingResults = createSelector(
  getPastSessionResultsScreenState,
  state => state.get('votingResults')
);
