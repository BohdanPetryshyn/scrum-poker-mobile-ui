import { createSelector } from 'reselect';

export const getPastSessionResultsScreenState = state =>
  state.get('pastSessionsResultsScreen');

export const getPastVotingResults = createSelector(
  getPastSessionResultsScreenState,
  state => state.get('votingResults')
);
