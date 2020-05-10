import { ofType, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { createStory } from '../actions/databaseActions';
import { RECEIVED_SOCKET_EVENT_ACTION_TYPES } from '../actions/socketActions';

const createStoryActionFromVotingStartedAction = action => {
  const { storyId, summary } = action.payload.story;

  return createStory(storyId, summary);
};

const createStoryAction$FromJoinSessionAction = action => {
  const votings = action.paylaod.pokerSession.votings;
  const stories = votings.map(voting => voting.story);
  return of(stories.map(story => createStory(story.storyId, story.summary)));
};

const saveStoryWhenVotingStarts = action$ =>
  action$.pipe(
    ofType(RECEIVED_SOCKET_EVENT_ACTION_TYPES.VOTING_STARTED),
    map(createStoryActionFromVotingStartedAction)
  );

const saveExistingStoriesWhenJoiningSession = action$ =>
  action$.pipe(
    ofType(RECEIVED_SOCKET_EVENT_ACTION_TYPES.JOIN_SESSION),
    mergeMap(createStoryAction$FromJoinSessionAction)
  );

export default combineEpics(
  saveStoryWhenVotingStarts,
  saveExistingStoriesWhenJoiningSession
);
