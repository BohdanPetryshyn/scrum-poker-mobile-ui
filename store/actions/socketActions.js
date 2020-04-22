import { EMIT_SOCKET_EVENT_ACTION_TYPE } from '../middleware/socketMiddleware';

const defaultSocketActionHandler = (socketAction, storeAction) => ({
  action: socketAction,
  handler: message => ({
    type: storeAction,
    payload: message,
  }),
});

export const SOCKET_ACTIONS = {
  SOCKET_CONNECTED: 'SOCKET_CONNECTED',
  SOCKET_DISCONNECTED: 'SOCKET_DISCONNECTED',
  STORY_CREATED: 'STORY_CREATED',
};

export const SOCKET_ACTION_HANDLERS = [
  defaultSocketActionHandler('connect', SOCKET_ACTIONS.SOCKET_CONNECTED),
  defaultSocketActionHandler('disconnect', SOCKET_ACTIONS.SOCKET_DISCONNECTED),
  defaultSocketActionHandler('STORY_CREATED', SOCKET_ACTIONS.STORY_CREATED),
];

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
