import { combineReducers } from 'redux-immutable';

import session from './session';
import createSessionScreen from './createSessionScreen';
import joinSessionScreen from './joinSessionScreen';
import createStoryScreen from './createStoryScreen';

export default combineReducers({
  session,
  createSessionScreen,
  joinSessionScreen,
  createStoryScreen,
});
