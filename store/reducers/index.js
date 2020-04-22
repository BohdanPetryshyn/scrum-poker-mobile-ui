import { combineReducers } from 'redux-immutable';

import session from './session';
import user from './user';
import createSessionScreen from './createSessionScreen';
import joinSessionScreen from './joinSessionScreen';
import createStoryScreen from './createStoryScreen';
import estimatingScreen from './estimatingScreen';

export default combineReducers({
  session,
  user,
  createSessionScreen,
  joinSessionScreen,
  createStoryScreen,
  estimatingScreen,
});
