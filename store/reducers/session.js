import { Map } from 'immutable';
import {
  CREATE_SESSION_ACTION_TYPES,
  JOIN_SESSION_ACTION_TYPES,
} from '../actions/requestActions';
import CardSchema from '../models/CardSchema';
import getOriginRequestActionPayload from '../getOriginRequestActionPayload';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
  username: null,
  stage: null,
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
    default:
      return state;
  }
};
