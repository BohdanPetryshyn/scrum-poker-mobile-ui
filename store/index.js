import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';

import client from '../api/client';
import reducers from './reducers';

const middleware = applyMiddleware(axiosMiddleware(client));

export default createStore(reducers, middleware);
