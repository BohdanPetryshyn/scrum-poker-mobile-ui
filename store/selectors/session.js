import { createSelector } from 'reselect';
import { isNil } from 'lodash';

const getSessionState = state => state.get('session');

export const getSessionId = createSelector(getSessionState, sessionState =>
  sessionState.get('sessionId')
);

export const getIsSessionStarted = createSelector(
  getSessionId,
  sessionId => !isNil(sessionId)
);

export const getSessionStage = createSelector(getSessionState, sessionState =>
  sessionState.get('stage')
);

export const getIsSessionHost = createSelector(getSessionState, sessionState =>
  sessionState.get('isHost')
);
