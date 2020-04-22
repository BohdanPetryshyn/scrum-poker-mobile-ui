const defaultSocketEventToActionMapper = (event, actionType) => ({
  event,
  eventToAction: message => ({
    type: actionType,
    payload: message,
  }),
});

export const SOCKET_ACTION_TYPES = {
  SOCKET_CONNECTED: 'SOCKET_CONNECTED',
  SOCKET_DISCONNECTED: 'SOCKET_DISCONNECTED',
  STORY_CREATED: 'STORY_CREATED',
};

export const EMITTED_SOCKET_EVENTS_ACTION_TYPES = {
  HOST_SESSION: 'HOST_SESSION',
  JOIN_SESSION: 'JOIN_SESSION',
  CREATE_STORY: 'CREATE_STORY',
};

export const SOCKET_EVENT_TO_ACTION_MAPPERS = [
  defaultSocketEventToActionMapper(
    'connect',
    SOCKET_ACTION_TYPES.SOCKET_CONNECTED
  ),
  defaultSocketEventToActionMapper(
    'disconnect',
    SOCKET_ACTION_TYPES.SOCKET_DISCONNECTED
  ),
  defaultSocketEventToActionMapper(
    'STORY_CREATED',
    SOCKET_ACTION_TYPES.STORY_CREATED
  ),
];

export const hostSession = sessionId => ({
  type: EMITTED_SOCKET_EVENTS_ACTION_TYPES.HOST_SESSION,
  payload: {
    socketEvent: {
      eventName: 'HOST_SESSION',
      message: {
        sessionId,
      },
    },
  },
});

export const joinSession = sessionId => ({
  type: EMITTED_SOCKET_EVENTS_ACTION_TYPES.JOIN_SESSION,
  payload: {
    socketEvent: {
      eventName: 'JOIN_SESSION',
      message: {
        sessionId,
      },
    },
  },
});

export const createStory = (summary, description, sessionId) => ({
  type: EMITTED_SOCKET_EVENTS_ACTION_TYPES.CREATE_STORY,
  payload: {
    socketEvent: {
      eventName: 'CREATE_STORY',
      message: {
        summary,
        description,
        sessionId,
      },
    },
  },
});
