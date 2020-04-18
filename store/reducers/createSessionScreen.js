import { Map } from 'immutable';
import { CREATE_SESSION_SCREEN_ACTION_TYPES } from '../actions/createSessionScreen';
import { FETCH_CARD_SCHEMAS_ACTION_TYPES } from '../actions/requestActions';

const initialState = Map({
  username: '',
  topic: '',
  cardSchema: null,
  cardSchemas: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_SCREEN_ACTION_TYPES.SET_FIELD_VALUE:
      return state.set(action.payload.filedName, action.payload.value);
    case FETCH_CARD_SCHEMAS_ACTION_TYPES.SUCCESS:
      return state.set('cardSchemas', action.payload.data);
    default:
      return state;
  }
};
