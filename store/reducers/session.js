import { Map } from 'immutable';
import {
  CREATE_SESSION_ACTION_TYPES,
  JOIN_SESSION_ACTION_TYPES,
} from '../actions/requestActions';
import CardSchema from '../models/CardSchema';
import getOriginRequestActionPayload from '../getOriginRequestActionPayload';
import { SOCKET_ACTIONS } from '../actions/socketActions';
import { VOTING } from '../models/sessionState';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
  stage: null,
  username: null,
  isHost: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SESSION_ACTION_TYPES.SUCCESS:
      return Map({
        ...action.payload.data,
        cardSchema: CardSchema(action.payload.cardSchema),
        username: getOriginRequestActionPayload(action).username,
        isHost: true,
      });
    case JOIN_SESSION_ACTION_TYPES.SUCCESS:
      return Map({
        ...action.payload.data,
        cardSchema: CardSchema(action.payload.cardSchema),
        username: getOriginRequestActionPayload(action).username,
        isHost: false,
      });
    case SOCKET_ACTIONS.STORY_CREATED:
      return state.set('stage', VOTING);
    default:
      return state;
  }
};
