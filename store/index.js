import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';

import client from '../api/client';

import session from './session';

const reducers = combineReducers({
  session,
});

const middleware = applyMiddleware(axiosMiddleware(client));

export default createStore(reducers, middleware);
