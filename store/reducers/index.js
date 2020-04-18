import { combineReducers } from 'redux-immutable';

import session from './session';
import createSessionScreen from './createSessionScreen';

export default combineReducers({ session, createSessionScreen });
