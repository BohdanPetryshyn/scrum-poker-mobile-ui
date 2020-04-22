import io from 'socket.io-client';

export const EMIT_SOCKET_EVENT_ACTION_TYPE = 'EMIT_SOCKET_EVENT';

const createSocketMiddleware = (url, actionHandlers) => store => {
  const socket = io.connect(url);

  actionHandlers.forEach(({ action, handler }) =>
    socket.on(action, message => store.dispatch(handler(message)))
  );

  return next => action => {
    if (action.type === EMIT_SOCKET_EVENT_ACTION_TYPE) {
      const { eventName, message } = action.payload;
      socket.emit(eventName, message);
    }

    return next(action);
  };
};

export default createSocketMiddleware;
