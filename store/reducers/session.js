import { Map, List } from 'immutable';
import CardSchema from '../models/CardSchema';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';
import { VOTING } from '../models/sessionState';
import Participant from '../models/Participant';
import Voting from '../models/Voting';

const initialState = Map({
  sessionId: null,
  topic: null,
  cardSchema: null,
  stage: null,
  participants: null,
  votings: null,
});

const toImmutableSessionState = session =>
  Map({
    sessionId: session.sessionId,
    topic: session.topic,
    stage: session.stage,
    cardSchema: CardSchema(session.cardSchema),
    participants: List(
      session.participants.map(participant => new Participant(participant))
    ),
    votings: List(session.votings.map(voting => new Voting(voting))),
  });

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED:
      return toImmutableSessionState(action.payload);
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION:
      return toImmutableSessionState(action.payload.pokerSession);
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
