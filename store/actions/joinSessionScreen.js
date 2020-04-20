import { joinSession } from './requestActions';
import { getUsername, getSessionId } from '../selectors/joinSessionScreen';

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

  return dispatch(joinSession(sessionId, username));
};
