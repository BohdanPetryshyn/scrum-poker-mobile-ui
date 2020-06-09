import { ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socket';
import { navigate } from '../../navigations';

export default action$ =>
  action$.pipe(
    ofType(
      RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION,
      RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED
    ),
    tap(() => navigate('Session', { screen: 'Vote' })),
    ignoreElements()
  );
