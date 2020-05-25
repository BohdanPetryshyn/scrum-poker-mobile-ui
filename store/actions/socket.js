const defaultSocketEventToActionMapper = (event, actionType) => ({
  event,
  eventToAction: message => ({
    type: actionType,
    payload: message,
  }),
});

export const RECEIVED_SOCKET_EVENT_ACTION_TYPES = {
  SOCKET_CONNECTED: 'SOCKET_CONNECTED',
  SOCKET_DISCONNECTED: 'SOCKET_DISCONNECTED',
  VOTING_STARTED: 'VOTING_STARTED',
  VOTING_ENDED: 'VOTING_ENDED',
  SESSION_CREATED: 'SESSION_CREATED',
  JOINED_SESSION: 'JOINED_SESSION',
  USER_JOINED: 'USER_JOINED',
  USER_CARD_CHANGED: 'USER_CARD_CHANGED',
  VOTING_RESULT_SET: 'VOTING_RESULT_SET',
};

export const EMITTED_SOCKET_EVENT_ACTION_TYPES = {
  START_VOTING: 'START_VOTING',
  ESTIMATE_STORY: 'ESTIMATE_STORY',
  SET_VOTING_RESULT: 'SET_VOTING_RESULT',
  CREATE_SESSION: 'CREATE_SESSION',
  JOIN_SESSION: 'JOIN_SESSION',
};

export const SOCKET_EVENT_TO_ACTION_MAPPERS = [
  defaultSocketEventToActionMapper(
    'connect',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.SOCKET_CONNECTED
  ),
  defaultSocketEventToActionMapper(
    'disconnect',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.SOCKET_DISCONNECTED
  ),
  defaultSocketEventToActionMapper(
    'VOTING_STARTED',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_STARTED
  ),
  defaultSocketEventToActionMapper(
    'VOTING_ENDED',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_ENDED
  ),
  defaultSocketEventToActionMapper(
    'USER_JOINED',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.USER_JOINED
  ),
  defaultSocketEventToActionMapper(
    'USER_CARD_CHANGED',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.USER_CARD_CHANGED
  ),
  defaultSocketEventToActionMapper(
    'VOTING_RESULT_SET',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_RESULT_SET
  ),
];

export const createSession = (
  username,
  topic,
  cardSchema,
  notificationsToken
) => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.CREATE_SESSION,
  payload: {
    socketEvent: {
      eventName: 'CREATE_SESSION',
      message: {
        username,
        topic,
        cardSchema,
        notificationsToken,
      },
      actionTypes: [RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED],
    },
  },
});

export const joinSession = (username, sessionId, notificationsToken) => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.JOIN_SESSION,
  payload: {
    socketEvent: {
      eventName: 'JOIN_SESSION',
      message: {
        username,
        sessionId,
        notificationsToken,
      },
      actionTypes: [RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION],
    },
  },
});

export const startVoting = (story, sessionId) => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.START_VOTING,
  payload: {
    socketEvent: {
      eventName: 'START_VOTING',
      message: {
        story,
        sessionId,
      },
    },
  },
});

export const estimateStory = card => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.ESTIMATE_STORY,
  payload: {
    socketEvent: {
      eventName: 'SELECT_CARD',
      message: {
        card,
      },
    },
  },
});

export const setVotingResult = card => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.SET_VOTING_RESULT,
  payload: {
    socketEvent: {
      eventName: 'SET_VOTING_RESULT',
      message: {
        card,
      },
    },
  },
});
