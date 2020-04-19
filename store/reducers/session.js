import { Map } from 'immutable';
import { CREATE_POKER_SESSION_ACTION_TYPES } from '../actions/requestActions';
import CardSchema from '../models/CardSchema';
import getOriginRequestActionPayload from '../getOriginRequestActionPayload';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
  username: null,
  stage: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POKER_SESSION_ACTION_TYPES.SUCCESS:
      return Map({
        ...action.payload.data,
        cardSchema: CardSchema(action.payload.cardSchema),
        username: getOriginRequestActionPayload(action).username,
      });
    default:
      return state;
  }
};
