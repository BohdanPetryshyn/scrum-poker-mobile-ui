import { Map } from 'immutable';
import CardSchema from '../models/CardSchema';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';
import { VOTING } from '../models/sessionState';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
  stage: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED:
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION:
      return Map({
        sessionId: action.payload.sessionId,
        topic: action.payload.topic,
        stage: action.payload.stage,
        cardSchema: CardSchema(action.payload.cardSchema),
      });
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.STORY_CREATED:
      return state.set('stage', VOTING);
    default:
      return state;
  }
};
