import { Map } from 'immutable';

import { JOIN_SESSION_SCREEN_ACTION_TYPES } from '../actions/joinSessionScreen';

const initialState = Map({
  username: '',
  sessionId: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case JOIN_SESSION_SCREEN_ACTION_TYPES.SET_FIELD_VALUE:
      return state.set(action.payload.filedName, action.payload.value);
    default:
      return state;
  }
};
