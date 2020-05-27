import { Notifications } from 'expo';
import { Toast } from 'native-base';

import { requestNotificationsPermission } from '../../permissions/notifications';

export const NOTIFICATIONS_ACTIONS = {
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  TOKEN_RETRIEVED: 'TOKEN_RETRIEVED',
  NOTIFICATION_RECEIVED: 'NOTIFICATION_RECEIVED',
};

const permissionDenied = () => ({
  type: NOTIFICATIONS_ACTIONS.PERMISSION_DENIED,
});

const tokenRetrieved = token => ({
  type: NOTIFICATIONS_ACTIONS.TOKEN_RETRIEVED,
  payload: token,
});

const notificationReceived = notification => ({
  type: NOTIFICATIONS_ACTIONS.NOTIFICATION_RECEIVED,
  payload: notification,
});

const showToast = (title, body, onSelect) => {
  Toast.show({
    text: `${title}\n${body}`,
    buttonText: 'Okay',
    position: 'top',
    duration: 4000,
    onClose: reason => reason === 'user' && onSelect(),
  });
};

const getNotificationHandler = dispatch => notification => {
  const {
    origin,
    data: { title, body },
  } = notification;

  const onSelect = () => dispatch(notificationReceived(notification));

  if (origin === 'received') {
    showToast(title, body, onSelect);
  } else {
    onSelect();
  }
};

export const registerForPushNotifications = () => async dispatch => {
  const notificationPermissionStatus = await requestNotificationsPermission();
  if (!notificationPermissionStatus) {
    return dispatch(permissionDenied());
  }

  Notifications.addListener(getNotificationHandler(dispatch));

  const token = await Notifications.getExpoPushTokenAsync();
  return dispatch(tokenRetrieved(token));
};
