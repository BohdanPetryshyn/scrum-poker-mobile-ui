import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';
import User from '../models/User';

const initialState = User();

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED:
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION:
      return new User(action.payload.user);
    default:
      return state;
  }
};
