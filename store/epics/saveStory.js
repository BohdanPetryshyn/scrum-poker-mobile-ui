import { ofType, combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { createStory } from '../actions/databaseActions';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';

const createStoryActionFromVotingStartedAction = action => {
  const { storyId, summary } = action.payload.story;
  return createStory(storyId, summary);
};

const createStoryAction$FromJoinSessionAction = action => {
  const createStoryActions = action.payload.pokerSession.votings
    .map(voting => voting.story)
    .map(story => createStory(story.storyId, story.summary));
  return from(createStoryActions);
};

const saveStoryWhenVotingStarts = action$ =>
  action$.pipe(
    ofType(RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_STARTED),
    map(createStoryActionFromVotingStartedAction)
  );

const saveExistingStoriesWhenJoiningSession = action$ =>
  action$.pipe(
    ofType(RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOINED_SESSION),
    flatMap(createStoryAction$FromJoinSessionAction)
  );

export default combineEpics(
  saveStoryWhenVotingStarts,
  saveExistingStoriesWhenJoiningSession
);
