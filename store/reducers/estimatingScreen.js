import { Map } from 'immutable';
import { EMITTED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';

const initialState = Map({
  estimate: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case EMITTED_SOCKET_EVENT_ACTION_TYPES.ESTIMATE_STORY:
      return state.set('estimate', action.payload.socketEvent.message.estimate);
    default:
      return state;
  }
};
