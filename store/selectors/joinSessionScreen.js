import { createSelector } from 'reselect';

export const getJoinSessionScreenState = state =>
  state.get('joinSessionScreen');

export const getUsername = createSelector(
  getJoinSessionScreenState,
  joinSessionScreenState => joinSessionScreenState.get('username')
);

export const getSessionId = createSelector(
  getJoinSessionScreenState,
  joinSessionScreenState => joinSessionScreenState.get('sessionId')
);

export const getIsFormFilled = createSelector(
  [getUsername, getSessionId],
  (username, sessionId) => !!(username && sessionId)
);
