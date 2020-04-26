import { createSelector } from 'reselect';
import { getUserState } from './user';
import { getUserCards } from './session';

export const getUserCard = createSelector(
  [getUserState, getUserCards],
  (user, userCards) => userCards.get(user.userId)
);
