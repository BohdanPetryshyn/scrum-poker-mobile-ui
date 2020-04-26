import { Map, List } from 'immutable';
import CardSchema from '../models/CardSchema';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';
import { VOTING } from '../models/sessionState';
import User from '../models/User';
import Voting from '../models/Voting';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
  stage: null,
  users: null,
  votings: null,
  currentVoting: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED:
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION:
      return Map({
        sessionId: action.payload.pokerSession.sessionId,
        topic: action.payload.pokerSession.topic,
        stage: action.payload.pokerSession.stage,
        cardSchema: CardSchema(action.payload.pokerSession.cardSchema),
        users: List(
          action.payload.pokerSession.users.map(user => new User(user))
        ),
        votings: List(
          action.payload.pokerSession.votings.map(voting => new Voting(voting))
        ),
        currentVoting:
          action.payload.pokerSession.currentVoting &&
          new Voting(action.payload.pokerSession.currentVoting),
      });
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_STARTED:
      return state.merge({
        stage: VOTING,
        currentVoting: new Voting(action.payload),
      });
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.USER_JOINED:
      return state.update('users', users => users.push(User(action.payload)));
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.USER_CARD_CHANGED:
      return state.set('currentVoting', new Voting(action.payload));
    default:
      return state;
  }
};
