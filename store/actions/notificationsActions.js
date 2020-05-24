import { Notifications } from 'expo';
import { requestNotificationsPermission } from '../../permissions/notifications';

export const NOTIFICATIONS_ACTIONS = {
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  TOKEN_RETRIEVED: 'TOKEN_RETRIEVED',
};

const permissionDenied = () => ({
  type: NOTIFICATIONS_ACTIONS.PERMISSION_DENIED,
});

const tokenRetrieved = token => ({
  type: NOTIFICATIONS_ACTIONS.TOKEN_RETRIEVED,
  payload: token,
});

export const registerForPushNotifications = () => async dispatch => {
  const notificationPermissionStatus = await requestNotificationsPermission();
  if (!notificationPermissionStatus) {
    return dispatch(permissionDenied());
  }
  const token = await Notifications.getExpoPushTokenAsync();
  return dispatch(tokenRetrieved(token));
};
