import { createSelector } from 'reselect';
import { isNil } from 'lodash';

export const getSessionState = state => state.get('session');

export const getSessionId = createSelector(getSessionState, sessionState =>
  sessionState.get('sessionId')
);

export const getIsSessionStarted = createSelector(
  getSessionId,
  sessionId => !isNil(sessionId)
);

export const getSessionStage = createSelector(getSessionState, sessionState =>
  sessionState.get('stage')
);

export const getSessionCardSchema = createSelector(
  getSessionState,
  sessionState => sessionState.get('cardSchema')
);

export const getSessionAvailableEstimates = createSelector(
  getSessionCardSchema,
  cardSchema => cardSchema.get('estimates')
);

export const getUsers = createSelector(getSessionState, sessionState =>
  sessionState.get('users')
);

export const getVotings = createSelector(getSessionState, sessionState =>
  sessionState.get('votings')
);

export const getCurrentVoting = createSelector(getSessionState, sessionState =>
  sessionState.get('currentVoting')
);

export const getVotingStory = createSelector(getCurrentVoting, voting =>
  voting.get('story')
);

export const getVotingStoryId = createSelector(getVotingStory, story =>
  story.get('storyId')
);

export const getVotingStorySummary = createSelector(getVotingStory, story => {
  return story.get('summary');
});

export const getVotingStoryDescription = createSelector(getVotingStory, story =>
  story.get('description')
);

export const getVotingFinishTime = createSelector(getCurrentVoting, voting => {
  return voting.get('finishTime');
});

export const getVotingEstimates = createSelector(getCurrentVoting, voting =>
  voting.get('estimates')
);

export const getUserCards = createSelector(getVotingEstimates, estimates =>
  estimates
    .groupBy(estimate => estimate.user.userId)
    .map(estimate => estimate.getIn([0, 'card']))
);

export const getUserEstimates = createSelector(
  [getUsers, getUserCards],
  (users, userCards) =>
    users.map(user => ({
      user,
      card: userCards.get(user.userId),
    }))
);
