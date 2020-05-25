import {
  getCardSchema,
  getTopic,
  getUsername,
} from '../selectors/createSessionScreen';
import { createSession } from './socket';
import { getNotificationsToken } from '../selectors/notifications';

export const CREATE_SESSION_SCREEN_ACTION_TYPES = {
  SET_FIELD_VALUE: 'SET_CREATE_SESSION_FIELD_VALUE',
};

export const setFieldValue = (filedName, value) => ({
  type: CREATE_SESSION_SCREEN_ACTION_TYPES.SET_FIELD_VALUE,
  payload: {
    filedName,
    value,
  },
});

export const createSessionFromStore = () => (dispatch, getState) => {
  const state = getState();
  const username = getUsername(state);
  const topic = getTopic(state);
  const cardSchema = getCardSchema(state);
  const notificationsToken = getNotificationsToken(state);

  return dispatch(
    createSession(username, topic, cardSchema, notificationsToken)
  );
};
