import { Map } from 'immutable';
import {
  CREATE_SESSION_ACTION_TYPES,
  JOIN_SESSION_ACTION_TYPES,
} from '../actions/requestActions';
import CardSchema from '../models/CardSchema';
import { SOCKET_ACTIONS } from '../actions/socketActions';
import { VOTING } from '../models/sessionState';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
  stage: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_ACTION_TYPES.SUCCESS:
    case JOIN_SESSION_ACTION_TYPES.SUCCESS:
      return Map({
        sessionId: action.payload.data.sessionId,
        topic: action.payload.data.topic,
        stage: action.payload.data.stage,
        cardSchema: CardSchema(action.payload.data.cardSchema),
      });
    case SOCKET_ACTIONS.STORY_CREATED:
      return state.set('stage', VOTING);
    default:
      return state;
  }
};
