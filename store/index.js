import { createStore, applyMiddleware } from 'redux';
import createAxiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import client from '../api/httpClient';
import reducers from './reducers';
import createSocketMiddleware from './middleware/socketMiddleware';
import { SOCKET_EVENT_TO_ACTION_MAPPERS } from './actions/socketActions';

const axiosMiddleware = createAxiosMiddleware(client, {
  returnRejectedPromiseOnError: true,
});

const socketMiddleware = createSocketMiddleware(
  'http://192.168.1.240:8080',
  SOCKET_EVENT_TO_ACTION_MAPPERS
);

const middleware = applyMiddleware(thunk, axiosMiddleware, socketMiddleware);

export default createStore(reducers, composeWithDevTools(middleware));
