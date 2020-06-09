import { ofType } from 'redux-observable';
import { map, tap, filter, withLatestFrom } from 'rxjs/operators';
import { getSessionId } from '../../selectors/session';
import { NOTIFICATIONS_ACTIONS } from '../../actions/notifications';
import { navigate } from '../../../navigations';
import { joinSession } from '../../actions/socket';

const isVotingStartedNotificationAction = action =>
  action.payload.data.type === 'VOTING_STARTED';

const isSessionJoined = (action, state) =>
  action.payload.data.payload.sessionId === getSessionId(state);

const navigateToSessionIfJoined = (action$, action, state) => {
  if (isSessionJoined(action, state)) {
    navigate('Session', { screen: 'Vote' });
  }
};

const toJoinSessionAction = action => {
  const { sessionId, username } = action.payload.data.payload;
  return joinSession(username, sessionId);
};

export default (action$, state$) =>
  action$.pipe(
    ofType(NOTIFICATIONS_ACTIONS.NOTIFICATION_RECEIVED),
    filter(isVotingStartedNotificationAction),
    withLatestFrom(state$),
    tap(([action, state]) => navigateToSessionIfJoined(action$, action, state)),
    filter(([action, state]) => !isSessionJoined(action, state)),
    map(([action]) => toJoinSessionAction(action))
  );
