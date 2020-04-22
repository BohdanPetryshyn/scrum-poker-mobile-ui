import { Map, List } from 'immutable';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';
import Story from '../models/Story';
import {
  CREATE_SESSION_ACTION_TYPES,
  JOIN_SESSION_ACTION_TYPES,
} from '../actions/requestActions';

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
    case CREATE_SESSION_ACTION_TYPES.SUCCESS:
    case JOIN_SESSION_ACTION_TYPES.SUCCESS:
      return state.set(
        'votingFinishTime',
        action.payload.data.votingFinishTime
      );
    default:
      return state;
  }
};
