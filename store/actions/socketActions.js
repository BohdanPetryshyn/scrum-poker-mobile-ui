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
  SESSION_CREATED: 'SESSION_CREATED',
  JOINED_SESSION: 'JOINED_SESSION',
  USER_JOINED: 'USER_JOINED',
};

export const EMITTED_SOCKET_EVENT_ACTION_TYPES = {
  START_VOTING: 'START_VOTING',
  ESTIMATE_STORY: 'ESTIMATE_STORY',
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
    'USER_JOINED',
    RECEIVED_SOCKET_EVENT_ACTION_TYPES.USER_JOINED
  ),
];

export const createSession = (username, topic, cardSchema) => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.CREATE_SESSION,
  payload: {
    socketEvent: {
      eventName: 'CREATE_SESSION',
      message: {
        username,
        topic,
        cardSchema,
      },
      actionTypes: [RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED],
    },
  },
});

export const joinSession = (username, sessionId) => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.JOIN_SESSION,
  payload: {
    socketEvent: {
      eventName: 'JOIN_SESSION',
      message: {
        username,
        sessionId,
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

export const estimateStory = (estimate, storyId) => ({
  type: EMITTED_SOCKET_EVENT_ACTION_TYPES.ESTIMATE_STORY,
  payload: {
    socketEvent: {
      eventName: 'ESTIMATE_STORY',
      message: {
        estimate,
        storyId,
      },
    },
  },
});
