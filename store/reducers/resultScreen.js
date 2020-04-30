import { Map } from 'immutable';
import { RESULT_SCREEN_ACTION_TYPES } from '../actions/resultScreenActions';

const initialState = Map({
  resultEstimate: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case RESULT_SCREEN_ACTION_TYPES.SET_FIELD_VALUE:
      return state.set(action.payload.filedName, action.payload.value);
    default:
      return state;
  }
};
