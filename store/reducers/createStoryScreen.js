import { Map } from 'immutable';
import { CREATE_STORY_SCREEN_ACTION_TYPES } from '../actions/createStoryScreen';

const initialState = Map({
  summary: '',
  description: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STORY_SCREEN_ACTION_TYPES.SET_FIELD_VALUE:
      return state.set(action.payload.fieldName, action.payload.value);
    default:
      return state;
  }
};
