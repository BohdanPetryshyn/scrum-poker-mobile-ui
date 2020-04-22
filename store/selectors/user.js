import { createSelector } from 'reselect';

const getUserState = state => state.get('user');

export const getIsSessionHost = createSelector(getUserState, state =>
  state.get('isHost')
);
