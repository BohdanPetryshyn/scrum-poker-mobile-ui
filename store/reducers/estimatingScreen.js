import { Map, List } from 'immutable';
import {
  EMITTED_SOCKET_EVENT_ACTION_TYPES,
  RECEIVED_SOCKET_EVENT_ACTION_TYPES,
} from '../actions/socketActions';
import Story from '../models/Story';

const initialState = Map({
  story: Story(),
  participants: List(),
  estimate: null,
  votingFinishTime: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.STORY_CREATED:
      return state.merge({
        story: Story(action.payload.story),
        votingFinishTime: action.payload.votingFinishTime,
      });
    case RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION:
      return state.set('votingFinishTime', action.payload.votingFinishTime);
    case EMITTED_SOCKET_EVENT_ACTION_TYPES.ESTIMATE_STORY:
      return state.set('estimate', action.payload.socketEvent.message.estimate);
    default:
      return state;
  }
};
