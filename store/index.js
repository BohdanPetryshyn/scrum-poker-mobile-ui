import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import client from '../api/client';
import reducers from './reducers';

const middleware = applyMiddleware(axiosMiddleware(client));

export default createStore(reducers, composeWithDevTools(middleware));
