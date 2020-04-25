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
      });
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_STARTED:
      return state
        .set('stage', VOTING)
        .update('votings', votings =>
          votings.unshift(new Voting(action.payload))
        );
    default:
      return state;
  }
};
