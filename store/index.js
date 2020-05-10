import { createStore, applyMiddleware } from 'redux';
import createAxiosMiddleware from 'redux-axios-middleware';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import client from '../api/httpClient';
import reducers from './reducers';
import epics from './epics';
import createSocketMiddleware from './middleware/socketMiddleware';
import { SOCKET_EVENT_TO_ACTION_MAPPERS } from './actions/socketActions';

const axiosMiddleware = createAxiosMiddleware(client, {
  returnRejectedPromiseOnError: true,
});

const socketMiddleware = createSocketMiddleware(
  'http://192.168.1.240:8080',
  SOCKET_EVENT_TO_ACTION_MAPPERS
);

const epicMiddleware = createEpicMiddleware();

const middlewareEnhancer = applyMiddleware(
  thunk,
  axiosMiddleware,
  socketMiddleware,
  epicMiddleware
);

const store = createStore(reducers, composeWithDevTools(middlewareEnhancer));

epicMiddleware.run(epics);

export default store;
