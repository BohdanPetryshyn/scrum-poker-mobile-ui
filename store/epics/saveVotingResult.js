import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { flatMap, withLatestFrom } from 'rxjs/operators';
import { getSessionId } from '../selectors/session';
import { createVotingResult } from '../actions/databaseActions';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';

const toCreateVotingResultAction = ([action, state]) => {
  const sessionId = getSessionId(state);
  const createVotingResultActions = action.payload.votings.map(voting =>
    createVotingResult(sessionId, voting.story.storyId, voting.resultCard)
  );
  return from(createVotingResultActions);
};

const saveVotingResultWhenVotingEnds = (action$, state$) =>
  action$.pipe(
    ofType(RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_RESULT_SET),
    withLatestFrom(state$),
    flatMap(toCreateVotingResultAction)
  );

export default saveVotingResultWhenVotingEnds;
