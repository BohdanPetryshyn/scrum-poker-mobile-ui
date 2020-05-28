import { ofType } from 'redux-observable';
import { map, take, tap, filter, withLatestFrom, delay } from 'rxjs/operators';
import { getSessionId } from '../../selectors/session';
import { NOTIFICATIONS_ACTIONS } from '../../actions/notifications';
import { navigate } from '../../../navigations';
import {
  joinSession,
  RECEIVED_SOCKET_EVENT_ACTION_TYPES,
} from '../../actions/socket';

const isVotingStartedNotificationAction = action =>
  action.payload.data.type === 'VOTING_STARTED';

const isVotingJoined = (action, state) =>
  action.payload.data.sessionId === getSessionId(state);

const scheduleVotingScreenNavigation = (action$, action, state) => {
  if (isVotingJoined(action, state)) {
    navigate('Vote');
  } else {
    action$
      .pipe(
        ofType(RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION),
        delay(200),
        take(1)
      )
      .subscribe(() => navigate('Vote'));
  }
};

const toJoinSessionAction = action => {
  const { sessionId, username } = action.payload.data;
  return joinSession(username, sessionId);
};

export default (action$, state$) =>
  action$.pipe(
    ofType(NOTIFICATIONS_ACTIONS.NOTIFICATION_RECEIVED),
    filter(isVotingStartedNotificationAction),
    withLatestFrom(state$),
    tap(([action, state]) =>
      scheduleVotingScreenNavigation(action$, action, state)
    ),
    filter(([action, state]) => !isVotingJoined(action, state)),
    map(([action]) => toJoinSessionAction(action))
  );
