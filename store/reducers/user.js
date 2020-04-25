import { Map } from 'immutable';

import getOriginSocketEventMessage from '../getOriginSocketEventMessage';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';

const initialState = Map({
  username: null,
  isHost: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED:
      return Map({
        username: getOriginSocketEventMessage(action).username,
        isHost: true,
      });
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION:
      return Map(action.payload.user);
    default:
      return state;
  }
};
