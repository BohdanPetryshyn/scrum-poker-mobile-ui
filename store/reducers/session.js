import { Map, List } from 'immutable';
import CardSchema from '../models/CardSchema';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';
import { RESULT, VOTING } from '../models/sessionState';
import User from '../models/User';
import Voting from '../models/Voting';

const toSessionState = pokerSession =>
  Map({
    sessionId: pokerSession.sessionId,
    topic: pokerSession.topic,
    stage: pokerSession.stage,
    cardSchema: CardSchema(pokerSession.cardSchema),
    users: List(pokerSession.users.map(user => new User(user))),
    votings: List(pokerSession.votings.map(voting => new Voting(voting))),
    currentVoting:
      pokerSession.currentVoting && new Voting(pokerSession.currentVoting),
  });

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
      return toSessionState(action.payload.pokerSession);
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_RESULT_SET:
      return toSessionState(action.payload);
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_STARTED:
      return state.merge({
        stage: VOTING,
        currentVoting: new Voting(action.payload),
      });
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_ENDED:
      return state.merge({
        stage: RESULT,
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
