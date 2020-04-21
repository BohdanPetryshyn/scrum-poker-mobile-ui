import io from 'socket.io-client';

export const EMIT_SOCKET_EVENT_ACTION_TYPE = 'EMIT_SOCKET_EVENT';

export const SOCKET_ACTIONS = {
  SOCKET_CONNECTED: 'SOCKET_CONNECTED',
  SOCKET_DISCONNECTED: 'SOCKET_DISCONNECTED',
};

const storeConnected = {
  type: SOCKET_ACTIONS.SOCKET_CONNECTED,
};

const storeDisconnected = {
  type: SOCKET_ACTIONS.SOCKET_DISCONNECTED,
};

const createSocketMiddleware = url => store => {
  const socket = io.connect(url);

  socket.on('connect', () => store.dispatch(storeConnected));
  socket.on('disconnect', () => store.dispatch(storeDisconnected));

  return next => action => {
    if (action.type === EMIT_SOCKET_EVENT_ACTION_TYPE) {
      const { eventName, message } = action.payload;
      socket.emit(eventName, message);
    }

    return next(action);
  };
};

export default createSocketMiddleware;
