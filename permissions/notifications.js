import * as Permissions from 'expo-permissions';

const GRANTED_STATUS = 'granted';

export const requestNotificationsPermission = async () => {
  const { status: currentStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (currentStatus === GRANTED_STATUS) {
    return true;
  }

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  return status === GRANTED_STATUS;
};
