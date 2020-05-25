import { getUsername, getSessionId } from '../selectors/joinSessionScreen';
import { joinSession } from './socket';
import { getNotificationsToken } from '../selectors/notifications';

export const JOIN_SESSION_SCREEN_ACTION_TYPES = {
  SET_FIELD_VALUE: 'SET_JOIN_SESSION_SCREEN_FIELD_VALUE',
};

export const setFieldValue = (filedName, value) => ({
  type: JOIN_SESSION_SCREEN_ACTION_TYPES.SET_FIELD_VALUE,
  payload: {
    filedName,
    value,
  },
});

export const joinSessionFromStore = () => (dispatch, getState) => {
  const state = getState();
  const username = getUsername(state);
  const sessionId = getSessionId(state);
  const notificationsToken = getNotificationsToken(state);

  return dispatch(joinSession(username, sessionId, notificationsToken));
};
