import io from 'socket.io-client';

const isError = message => !message || message.error;

const ack = (dispatch, socketEvent) => message => {
  const { actionTypes } = socketEvent;
  if (!actionTypes) {
    return;
  }
  if (isError(message) && actionTypes[1]) {
    console.log('ERROR_MESSAGE', message);
    dispatch({
      type: actionTypes[1],
    });
  }
  if (!isError(message) && actionTypes[0]) {
    console.log('SUCCESS_MESSAGE', message);
    dispatch({
      type: actionTypes[0],
      payload: message,
      meta: {
        socketEvent,
      },
    });
  }
};

const createSocketMiddleware = (url, eventToActionMappers) => store => {
  const socket = io.connect(url);

  eventToActionMappers.forEach(({ event, eventToAction }) =>
    socket.on(event, message => store.dispatch(eventToAction(message)))
  );

  return next => action => {
    if (action.payload && action.payload.socketEvent) {
      const { socketEvent } = action.payload;
      const { eventName, message } = socketEvent;
      socket.emit(eventName, message, ack(store.dispatch, socketEvent));
    }

    return next(action);
  };
};

export default createSocketMiddleware;
