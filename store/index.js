import { createStore, applyMiddleware } from 'redux';
import createAxiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import client from '../api/httpClient';
import reducers from './reducers';

const axiosMiddleware = createAxiosMiddleware(client, {
  returnRejectedPromiseOnError: true,
});

const middleware = applyMiddleware(axiosMiddleware);

export default createStore(reducers, composeWithDevTools(middleware));
