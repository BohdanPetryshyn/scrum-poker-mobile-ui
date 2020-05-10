import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { createSession } from '../actions/databaseActions';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';

const toCreateSessionAction = action => {
  const { sessionId, topic } = action.payload.pokerSession;

  return createSession(sessionId, topic);
};

export default action$ =>
  action$.pipe(
    ofType(
      RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED,
      RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION
    ),
    map(toCreateSessionAction)
  );
