import {
  getCardSchema,
  getTopic,
  getUsername,
} from '../selectors/createSessionScreen';
import { createSession } from './requestActions';

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

  return dispatch(createSession(topic, cardSchema, username));
};
