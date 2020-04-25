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

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.SESSION_CREATED:
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION:
      return Map({
        sessionId: action.payload.sessionId,
        topic: action.payload.topic,
        stage: action.payload.stage,
        cardSchema: CardSchema(action.payload.cardSchema),
        participants: List(
          action.payload.participants.map(
            participant => new Participant(participant)
          )
        ),
        votings: List(action.payload.votings.map(voting => new Voting(voting))),
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
