import { Map, List } from 'immutable';
import { DATABASE_ACTIONS } from '../actions/database';
import PastVotingResult from '../models/PastVotingResult';

const initialState = Map({
  votingResults: List(),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case DATABASE_ACTIONS.VOTINGS_FETCHED:
      return state.set(
        'votingResults',
        List(
          action.payload.map(votingResult => new PastVotingResult(votingResult))
        )
      );
    default:
      return state;
  }
};
