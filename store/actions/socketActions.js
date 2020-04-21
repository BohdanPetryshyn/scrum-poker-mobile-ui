import { EMIT_SOCKET_EVENT_ACTION_TYPE } from '../middleware/socketMiddleware';

export const hostSession = sessionId => ({
  type: EMIT_SOCKET_EVENT_ACTION_TYPE,
  payload: {
    eventName: 'HOST_SESSION',
    message: {
      sessionId,
    },
  },
});

export const joinSession = sessionId => ({
  type: EMIT_SOCKET_EVENT_ACTION_TYPE,
  payload: {
    eventName: 'JOIN_SESSION',
    message: {
      sessionId,
    },
  },
});

export const createStory = (name, description, sessionId) => ({
  type: EMIT_SOCKET_EVENT_ACTION_TYPE,
  payload: {
    eventName: 'CREATE_STORY',
    message: {
      name,
      description,
      sessionId,
    },
  },
});
