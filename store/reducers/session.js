import { Map } from 'immutable';
import { CREATE_POKER_SESSION_ACTION_TYPES } from '../actions/requestActions';
import CardSchema from '../models/CardSchema';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POKER_SESSION_ACTION_TYPES.SUCCESS:
      return Map({
        ...action.payload.data,
        cardSchema: CardSchema(action.payload.cardSchema),
      });
    default:
      return state;
  }
};
