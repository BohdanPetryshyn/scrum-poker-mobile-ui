import { Map } from 'immutable';
import { CREATE_SESSION_SCREEN_ACTION_TYPES } from '../actions/createSessionScreen';

const initialState = Map({
  username: '',
  topic: '',
  cardSchema: null,
});

export default (state = initialState, action) => {
  switch (state.action) {
    case CREATE_SESSION_SCREEN_ACTION_TYPES.SET_FIELD_VALUE:
      return state.set(action.payload.filedName, action.payload.value);
    default:
      return state;
  }
};
