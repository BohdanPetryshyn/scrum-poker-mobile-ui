import io from 'socket.io-client';

const createSocketMiddleware = (url, eventToActionMappers) => store => {
  const socket = io.connect(url);

  eventToActionMappers.forEach(({ event, eventToAction }) =>
    socket.on(event, message => store.dispatch(eventToAction(message)))
  );

  return next => action => {
    if (action.payload && action.payload.socketEvent) {
      const { eventName, message } = action.payload.socketEvent;
      socket.emit(eventName, message);
    }

    return next(action);
  };
};

export default createSocketMiddleware;
