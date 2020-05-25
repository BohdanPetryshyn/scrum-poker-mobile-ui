import { createSelector } from 'reselect';

export const getNotificationsState = state => state.get('notifications');

export const getNotificationsToken = createSelector(
  getNotificationsState,
  state => state.get('expoPushToken')
);
