import { Map } from 'immutable';

import {
  CREATE_SESSION_ACTION_TYPES,
  JOIN_SESSION_ACTION_TYPES,
} from '../actions/requestActions';
import getOriginRequestActionPayload from '../getOriginRequestActionPayload';

const initialState = Map({
  username: null,
  isHost: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_ACTION_TYPES.SUCCESS:
      return Map({
        username: getOriginRequestActionPayload(action).username,
        isHost: true,
      });
    case JOIN_SESSION_ACTION_TYPES.SUCCESS:
      return Map({
        username: getOriginRequestActionPayload(action).username,
        isHost: false,
      });
    default:
      return state;
  }
};
