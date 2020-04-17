import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

import session from './session';

export default combineReducers(
  Map({
    session,
  })
);
